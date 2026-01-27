// select all product cards

const product = document.querySelectorAll("#product-card");
// console.log(product);

//extract and log name of all products

const productname = document.querySelectorAll(".product-name");

productname.forEach((el) => {
  console.log(el.innerHTML);
});

//select and log all price of laptop category products

const productprice = document.querySelectorAll(
  "[data-category='laptop'] .product-price",
);
// console.log(productprice);
productprice.forEach((el) => {
  console.log(el.textContent);
});

// select all products with a rating above 4.5

const rating = document.querySelectorAll(
  "[data-rating='4.7'], [data-rating='4.8']",
);
console.log(rating);
rating.forEach((el) => {
  console.log(el.innerHTML);
});
