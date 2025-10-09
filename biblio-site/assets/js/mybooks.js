$(document).ready(function () {
  const outputList = $("#list-output");
  const placeholderImg = "assets/images/cover_not_found.jpg";

  const userBooks = [
    {
      title: "O iluminado",
      authors: ["Stephen King"],
      rating: 4,
      publisher: "Editora Objetiva",
      publishedDate: "1977",
      description:
        "Jack Torrance aceita um emprego como zelador de inverno em um hotel isolado nas montanhas...",
      img: "https://books.google.com/books/content?id=O4wtDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "Utilizando UML e Padrões",
      authors: ["Craig Larman"],
      rating: 3,
      publisher: "Editora Bookman",
      publishedDate: "2004",
      description:
        "Uma introdução prática à modelagem de software utilizando UML e padrões de projeto.",
      img: "https://books.google.com/books/content?id=hzl2tmT8QkUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "A guerra dos tronos",
      authors: ["George R. R. Martin"],
      rating: 5,
      publisher: "Editora Leya",
      publishedDate: "1996",
      description:
        "Primeiro livro da saga As Crônicas de Gelo e Fogo, um épico de fantasia medieval.",
      img: "https://books.google.com/books/content?id=DLKMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "O poder do hábito",
      authors: ["Charles Duhigg"],
      rating: 4,
      publisher: "Editora Objetiva",
      publishedDate: "2012",
      description:
        "Explora como hábitos funcionam e como podemos mudá-los para melhorar nossa vida pessoal e profissional.",
      img: "https://books.google.com/books/content?id=k0j8IgiMKoMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "O Hobbit",
      authors: ["J.R.R. Tolkien"],
      rating: 5,
      publisher: "HarperCollins",
      publishedDate: "1937",
      description:
        "Bilbo Bolseiro embarca em uma aventura épica antes da famosa saga O Senhor dos Anéis.",
      img: "https://books.google.com/books/content?id=2LeZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "UML 2 - Uma Abordagem Prática",
      authors: ["Gilleanes T. A. Guedes"],
      rating: 3,
      publisher: "Novatec",
      publishedDate: "2010",
      description:
        "Uma abordagem prática para trabalhar com UML 2, com exemplos e exercícios.",
      img: "https://books.google.com/books/content?id=mJxMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
  ];

  function renderBooks() {
    outputList.empty();
    userBooks.forEach((book, index) => {
      const imgSrc = book.img ? book.img : placeholderImg;
      const authors = Array.isArray(book.authors)
        ? book.authors.join(", ")
        : book.authors || "Autor desconhecido";
      const stars =
        "★".repeat(Math.max(0, Math.min(5, book.rating || 0))) +
        "☆".repeat(5 - Math.max(0, Math.min(5, book.rating || 0)));

      const card = $(`
        <div class="book-card card">
          <img src="${imgSrc}" alt="${escapeHtml(book.title)}">
          <div class="book-info">
            <h3 class="title">${escapeHtml(book.title)}</h3>
            <p class="author">${escapeHtml(authors)}</p>
            <p class="meta"><b>Avaliação:</b> ${stars}</p>
            <div class="book-actions">
              <button class="btn btn-details">Detalhes</button>
              <button class="btn btn-remove">Remover</button>
            </div>
          </div>
        </div>
      `);

      card.find(".btn-details").click(function () {
        openModalForBook(book);
      });

      card.find(".btn-remove").click(function () {
        userBooks.splice(index, 1);
        renderBooks();
        showConfirm("Removido com sucesso");
      });

      outputList.append(card);
    });
  }

  function openModalForBook(book) {
    const imgSrc = book.img ? book.img : placeholderImg;
    const authors = Array.isArray(book.authors)
      ? book.authors.join(", ")
      : book.authors || "Autor desconhecido";

    const modalHtml = $(`
      <div class="book-modal">
        <div class="modal-content" role="dialog" aria-modal="true" aria-label="${escapeHtml(
          book.title
        )}">
          <button class="close-modal" aria-label="Fechar">&times;</button>
          <div class="modal-inner">
            <img src="${imgSrc}" alt="${escapeHtml(
      book.title
    )}" class="img-modal">
            <div class="modal-details">
              <h2 class="title">${escapeHtml(book.title)}</h2>
              <p class="meta"><b>Autor:</b> ${escapeHtml(authors)}</p>
              <p class="meta"><b>Editora:</b> ${escapeHtml(
                book.publisher || "—"
              )}</p>
              <p class="meta"><b>Lançamento:</b> ${escapeHtml(
                book.publishedDate || "—"
              )}</p>
              <div class="description">${escapeHtml(
                book.description || "Descrição indisponível"
              )}</div>
            </div>
          </div>
        </div>
      </div>
    `);

    $("body").append(modalHtml);
    $("body").addClass("modal-open");

    modalHtml.find(".close-modal").on("click", removeModal);
    modalHtml.on("click", function (e) {
      if (e.target === modalHtml[0]) removeModal();
    });
    $(document).on("keydown.modalClose", function (e) {
      if (e.key === "Escape") removeModal();
    });

    function removeModal() {
      modalHtml.remove();
      $("body").removeClass("modal-open");
      $(document).off("keydown.modalClose");
    }
  }

  function showConfirm(message) {
    const confirmEl = $(
      `<div class="confirm-modal">${escapeHtml(message)}</div>`
    );
    $("body").append(confirmEl);
    setTimeout(() => {
      confirmEl.fadeOut(200, function () {
        $(this).remove();
      });
    }, 1400);
  }

  function escapeHtml(str) {
    if (!str && str !== 0) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  renderBooks();

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
