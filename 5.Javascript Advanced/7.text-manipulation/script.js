//using textcontent to update the blog title
const blog = document.getElementById("title");
blog.textContent = "New Blog Title";

//change the background color
blog.style.backgroundColor = "red";
blog.style.color = "white";

//using innerHTML to add another paragraph with some HTML content
const paragraph = document.getElementById("paragraph");
// paragraph.innerHTML = "<h1>I Have Changed the Paragraph </h1>";

paragraph.innerHTML +=
  "<br> <strong>This is a new paragraph with strong formatting </strong>";

//using innerText to modify the comment section (assume the original comment is visible)

const comment = document
  .getElementById("comment1")
  .querySelector(".commentText");

comment.innerText = "updated first comment. This Important!";
