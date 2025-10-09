$(document).ready(function () {
  const $searchBox = $("#search-box");
  const $outputList = $("#list-output");
  const placeholderImg = "assets/images/cover_not_found.jpg";
  const $searchBtn = $(".search-icon");
  let ajaxRunning = false;
  let currentModal = null;

  function escapeHtml(str) {
    if (str === undefined || str === null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function showToast(msg, timeout = 2500) {
    const $t = $(`<div class="toast">${escapeHtml(msg)}</div>`);
    $("body").append($t);
    setTimeout(() => $t.addClass("visible"), 10);
    setTimeout(() => $t.removeClass("visible"), timeout);
    setTimeout(() => $t.remove(), timeout + 300);
  }

  function searchBooks() {
    if (ajaxRunning) return;
    const query = ($searchBox.val() || "").trim();
    if (!query) {
      showToast("Digite algo para pesquisar!");
      return;
    }

    ajaxRunning = true;
    $searchBtn.prop("disabled", true);

    const $spinner = $(`
      <div class="spinner-wrap" aria-hidden="true">
        <div class="spinner" role="status" aria-hidden="true"></div>
        <div class="spinner-text">Carregando...</div>
      </div>
    `);
    $outputList.empty().append($spinner);

    $.ajax({
      url: `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        query
      )}&maxResults=12`,
      dataType: "json",
      success: function (response) {
        if (!response.items || response.items.length === 0) {
          $outputList.html("<p>Nenhum resultado encontrado.</p>");
          return;
        }
        displayBooks(response.items);
      },
      error: function () {
        showToast("Erro ao buscar livros. Tente novamente!");
        $outputList.html("<p>Erro ao buscar resultados.</p>");
      },
      complete: function () {
        ajaxRunning = false;
        $searchBtn.prop("disabled", false);
      },
    });
  }

  $searchBox.on("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBooks();
    }
  });

  $searchBtn.on("click", function (e) {
    e.preventDefault();
    searchBooks();
  });

  function displayBooks(items) {
    $outputList.empty();
    items.forEach((item) => {
      const info = item.volumeInfo || {};
      const title = info.title || "Sem título";
      const authors = info.authors
        ? info.authors.join(", ")
        : "Autor desconhecido";
      const publisher = info.publisher || "Editora desconhecida";
      const publishedDate = info.publishedDate || "Data desconhecida";
      const description = info.description || "Descrição indisponível";
      const img =
        (info.imageLinks &&
          (info.imageLinks.thumbnail || info.imageLinks.smallThumbnail)) ||
        placeholderImg;
      const previewLink = info.previewLink || "#";

      const card = $(`
        <div class="book-card card">
          <div class="img-wrap"><img src="${img}" alt="${escapeHtml(
        title
      )}"></div>
          <div class="book-info">
            <div>
              <h3 class="title">${escapeHtml(title)}</h3>
              <p class="author">${escapeHtml(authors)}</p>
              <p class="meta"><b>Editora:</b> ${escapeHtml(publisher)}</p>
            </div>
            <div class="book-actions">
              <button class="btn btn-details">Ver detalhes</button>
            </div>
          </div>
        </div>
      `);

      card.find(".btn-details").on("click", function () {
        showBookDetails({
          title,
          authors,
          publisher,
          publishedDate,
          description,
          img,
          previewLink,
        });
      });

      $outputList.append(card);
    });
  }

  function showBookDetails(book) {
    removeModal();
    const modalHtml = $(`
      <div class="book-modal" role="presentation">
        <div class="modal-content" role="dialog" aria-modal="true" aria-label="${escapeHtml(
          book.title
        )}">
          <button class="close-modal" aria-label="Fechar">&times;</button>
          <div class="modal-inner">
            <img src="${book.img}" alt="${escapeHtml(
      book.title
    )}" class="img-modal">
            <div class="modal-details">
              <h2 class="title">${escapeHtml(book.title)}</h2>
              <p class="meta"><b>Autor:</b> ${escapeHtml(book.authors)}</p>
              <p class="meta"><b>Editora:</b> ${escapeHtml(book.publisher)}</p>
              <p class="meta"><b>Lançamento:</b> ${escapeHtml(
                book.publishedDate
              )}</p>
              <div class="description">${escapeHtml(book.description)}</div>
              <div class="modal-actions" style="margin-top:12px;">
                <a href="${
                  book.previewLink
                }" target="_blank" rel="noopener" class="btn">Pré-visualizar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    $("body").append(modalHtml);
    $("body").addClass("modal-open");
    currentModal = modalHtml;

    const $focusables = modalHtml
      .find("a, button, input, [tabindex]")
      .filter(":visible");
    if ($focusables.length) $focusables.first().focus();

    modalHtml.find(".close-modal").on("click", removeModal);
    modalHtml.on("click", function (e) {
      if ($(e.target).closest(".modal-content").length === 0) removeModal();
    });

    $(document).on("keydown.modalClose", function (e) {
      if (!currentModal) return;
      if (e.key === "Escape") {
        removeModal();
        return;
      }
      if (e.key === "Tab") {
        const focusables = currentModal
          .find(
            'a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])'
          )
          .filter(":visible");
        if (!focusables.length) return;
        const first = focusables.first()[0];
        const last = focusables.last()[0];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    function removeModal() {
      if (!currentModal) return;
      currentModal.remove();
      currentModal = null;
      $("body").removeClass("modal-open");
      $(document).off("keydown.modalClose");
    }
  }

  function removeModal() {
    if (currentModal) {
      currentModal.remove();
      currentModal = null;
      $("body").removeClass("modal-open");
      $(document).off("keydown.modalClose");
    }
  }

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
});
