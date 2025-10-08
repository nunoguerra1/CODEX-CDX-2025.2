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
      const stars = "★".repeat(book.rating) + "☆".repeat(5 - book.rating);

      const card = $(`
        <div class="card book-card">
          <img src="${imgSrc}" alt="${book.title}">
          <div class="card-body">
            <h5>${book.title}</h5>
            <p><b>Autor:</b> ${book.authors.join(", ")}</p>
            <p><b>Avaliação:</b> ${stars}</p>
            <button class="btn btn-details">Ver detalhes</button>
            <button class="btn btn-remove">Remover</button>
          </div>
        </div>
      `);

      card.find(".btn-details").click(function () {
        const modalHtml = $(`
          <div class="book-modal">
            <div class="modal-content">
              <span class="close-modal">&times;</span>
              <img src="${imgSrc}" alt="${book.title}">
              <h2>${book.title}</h2>
              <p><b>Autor:</b> ${book.authors.join(", ")}</p>
              <p><b>Editora:</b> ${book.publisher}</p>
              <p><b>Lançamento:</b> ${book.publishedDate}</p>
              <p>${book.description}</p>
            </div>
          </div>
        `);
        $("body").append(modalHtml);
        modalHtml.find(".close-modal").click(function () {
          modalHtml.remove();
        });
      });

      card.find(".btn-remove").click(function () {
        userBooks.splice(index, 1);
        renderBooks();
      });

      outputList.append(card);
    });
  }

  renderBooks();
});
