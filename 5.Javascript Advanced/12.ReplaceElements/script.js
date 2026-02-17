//function to replace an article

function replaceArticle(articleId, newContent) {
  // find the existing article elements by its Id

  const existingArticle = document.getElementById(articleId);

  //create a new div elements for the updates article
  const newarticle = document.createElement("div");

  //add css to its
  newarticle.className = "article";

  //keep the id same for the new article
  newarticle.id = articleId;

  //create a text node for the new content
  const newTextNode = document.createTextNode(newContent);

  //appened the text node to the new article div
  newarticle.appendChild(newTextNode);

  //replace the existing article with the new one
  existingArticle.parentNode.replaceChild(newarticle, existingArticle);
  console.log(newarticle);
}
replaceArticle("article1", "some content");
replaceArticle("article2", "some content 2");