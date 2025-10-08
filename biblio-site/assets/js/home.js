$(document).ready(function () {
  const searchBox = $("#search-box");
  const outputList = $("#list-output");
  const placeholderImg = "assets/images/cover_not_found.jpg";

  function searchBooks() {
    const query = searchBox.val().trim();
    if (!query) {
      alert("Digite algo para pesquisar!");
      return;
    }

    outputList.empty();

    $.ajax({
      url: `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        query
      )}&maxResults=12`,
      dataType: "json",
      success: function (response) {
        if (!response.items || response.items.length === 0) {
          outputList.html("<p>Nenhum resultado encontrado.</p>");
          return;
        }
        displayBooks(response.items);
      },
      error: function () {
        alert("Erro ao buscar livros. Tente novamente!");
      },
    });

    searchBox.val("");
  }

  function displayBooks(items) {
    items.forEach((item) => {
      const info = item.volumeInfo;
      const title = info.title || "Sem título";
      const authors = info.authors
        ? info.authors.join(", ")
        : "Autor desconhecido";
      const publisher = info.publisher || "Editora desconhecida";
      const publishedDate = info.publishedDate || "Data desconhecida";
      const description = info.description || "Descrição indisponível";
      const img = info.imageLinks ? info.imageLinks.thumbnail : placeholderImg;
      const previewLink = info.previewLink || "#";

      const card = $(`
        <div class="card book-card">
            <img src="${img}" alt="${title}">
            <div class="card-body">
                <h5>${title}</h5>
                <p><b>Autor:</b> ${authors}</p>
                <p><b>Editora:</b> ${publisher}</p>
                <button class="btn btn-details">Ver detalhes</button>
            </div>
        </div>
      `);

      card.find(".btn-details").click(function () {
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

      outputList.append(card);
    });
  }

  function showBookDetails(book) {
    const modalHtml = $(`
      <div class="book-modal">
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <img src="${book.img}" alt="${book.title} class="img-modal">
          <h2>${book.title}</h2>
          <p><b>Autor:</b> ${book.authors}</p>
          <p><b>Editora:</b> ${book.publisher}</p>
          <p><b>Lançamento:</b> ${book.publishedDate}</p>
          <p>${book.description}</p>
          <br>
          <a href="${book.previewLink}" target="_blank" class="btn">Pré-visualizar</a>
        </div>
      </div>
    `);

    $("body").append(modalHtml);

    modalHtml.find(".close-modal").click(function () {
      modalHtml.remove();
    });
  }

  $(".search-icon").click(searchBooks);

  searchBox.keypress(function (e) {
    if (e.which === 13) searchBooks();
  });
});
