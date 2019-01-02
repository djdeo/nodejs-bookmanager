window.onload = PostService.getPosts();
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const book = document.querySelector("input").value;
  UI.addBookToList(book);
  PostService.insertPost(book);
  document.querySelector("input").value = "";
});

document.querySelector("#posts").addEventListener("click", e => {
  UI.deleteBook(e.target);
});
