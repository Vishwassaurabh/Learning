//make sure all assets are loaded
document.addEventListener("DOMContentLoaded", () => {

  const postscontainer = document.querySelector(".posts-container");
  
  const ApiURL = "https://jsonplaceholder.typicode.com/posts";

  async function fetchPost() {
    try {
      //make the http request
      const response = await fetch(ApiURL);
      const posts = await response.json();

      //clear the loading message
      postscontainer.innerHTML = "";

      //display posts
      posts.forEach((post) => {
        const postElement = createPostEl(post);
        postscontainer.appendChild(postElement);
      });
    } catch (error) {
      postscontainer.innerHTML =
        '<p style="color:red,text-align:center">Error loading posts. please try agin later </p>';
    }
  }

  //create post html element
  function createPostEl(post) {
    const article = document.createElement("article");
    article.className = "post-card";

    const title = document.createElement("h2");
    title.className = "post-title";
    title.textContent = post.title;

    const body = document.createElement("p");
    body.className = "post-body";
    body.textContent = post.body;

    article.appendChild(title);
    article.appendChild(body);

    return article;
  }

  fetchPost();
});
