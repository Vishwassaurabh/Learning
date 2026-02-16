//using setAttribute to change product images
const products1 = document.getElementById("product1").querySelector("img");

products1.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg",
);

products1.setAttribute("alt", "my new product");

//using setattributes to change product links
const productlink = document.getElementById("product1").querySelector("a");
productlink.setAttribute("href", "new-product.html");
console.log(productlink);
