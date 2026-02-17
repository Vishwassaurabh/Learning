//for this example let consider a gallery of image where each image has an associated data attributes called `data-author` that stores the author's name you want filters the image by author

//get all image
const images = document.getElementById("imageGallery").querySelectorAll("img");
// console.log(images);

//craete an array to store image by alice

let imageByAlice = [];

//use getattributes to filters image by authore Alice
images.forEach((img) => {
  const author = img.getAttribute("data-author");
  console.log(author);

  if (author === "Alice") {
    imageByAlice.push(img);
  }
});
imageByAlice.forEach((img) => console.log(img));

//hide image that are not by alice
images.forEach((img) => {
  if (!imageByAlice.includes(img)) {
    img.style.display = "none";
  }
});
