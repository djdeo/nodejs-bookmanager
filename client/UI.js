class UI {
  static listAll() {
    const books = Store.getBooks();
    books.forEach(book => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    li.innerHTML = `
            <span class="name">${book}</span><span class="delete">delete</span>
        `;
    ul.appendChild(li);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.remove();
    }
  }
  static showAlert(msg, className) {
    const p = document.querySelector("p.info");

    p.classList.add(`info-${className}`);
    p.innerText = msg;
    setTimeout(() => {
      p.innerHTML = "";
      p.classList.remove(`info-${className}`);
    }, 1500);
  }
  static clearField() {
    document.querySelector("#title").value = "";
  }
}
