// fetch the elements with id="parent"

const parent = document.querySelector("#parent");
//? console.log(parent.childNodes);

//? parent.childNodes.forEach((node) => console.log(node.nodeType));

// fetch all child element nodes of the prent element
console.log(parent.children);

const converthtml = Array.from(parent.children);
converthtml.forEach((el) => console.log(el));
