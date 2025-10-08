document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");
  const searchBox = document.getElementById("search-box");
  const outputList = document.getElementById("list-output");
  const placeHldr = "../assets/img/cover_not_found.jpg";
  const state = "Sim";

  searchButton.addEventListener("click", async () => {
    const query = searchBox.value.trim();
    if (!query) return alert("Escreva algo para pesquisar.");

    outputList.innerHTML = "";
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        alert("Nenhum resultado encontrado. Tente novamente!");
        return;
      }

      document.getElementById("title").style.marginTop = "5px";
      document.querySelector(".book-list").style.visibility = "visible";

      renderResults(data.items);
    } catch (err) {
      console.error(err);
      alert("Algo deu errado ao buscar os livros. Tente novamente!");
    }

    searchBox.value = "";
  });

  function renderResults(items) {
    for (let i = 0; i < items.length; i += 2) {
      const item1 = items[i].volumeInfo;
      const item2 = items[i + 1]?.volumeInfo;

      const row = document.createElement("div");
      row.className = "row mt-4";

      row.innerHTML = `${createCard(item1)}${item2 ? createCard(item2) : ""}`;
      outputList.appendChild(row);
    }
  }

  function createCard(book) {
    const title = book.title || "Sem título";
    const authors = book.authors
      ? book.authors.join(", ")
      : "Autor desconhecido";
    const publisher = book.publisher || "Editora desconhecida";
    const img = book.imageLinks?.thumbnail || placeHldr;
    const isbn = book.industryIdentifiers?.[0]?.identifier || "";
    const viewUrl = `book.html?isbn=${isbn}`;

    return `
      <div class="col-lg-6">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${img}" class="card-img" alt="Capa do livro">
            </div>
            <div class="col-md-8">
              <div class="card-body align">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Autor: ${authors}</p>
                <p class="card-text">Editora: ${publisher}</p>
                <p class="card-text">Disponível na biblioteca? <b>${state}</b></p>
                <a target="_blank" href="${viewUrl}" class="btn btn-secondary">Prévia</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
});
