const url = "http://localhost:5000/api/posts/";

class PostService {
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.forEach(post => {
            let li = document.createElement("li");
            li.innerHTML =
              post.text +
              ` <button class="delete" onclick="PostService.deletePost('${
                post._id
              }')">Delete</button>`;
            posts.appendChild(li);
          })
        );
      } catch (err) {
        reject(err);
      }
    });
  }
  static deletePost(id) {
    console.log(`Post id: + ${id} +  deleted`);
    return axios.delete(`${url}${id}`);
  }
  static insertPost(text) {
    return axios.post(url, { text });
  }
}
