//step 1: select a list item using data attributes
const selectitem = document.querySelector('[data-item="fruit"]');

//step 2: Navigate to the parent <ul> </ul> element
const parentList = selectitem.parentNode;
// console.log(parentList);

//step 3: navigate to grandparent
const grandparent = parentList.parentNode;
// console.log(grandparent);

//step 4: navigate to great grandparent
const greatGrandParent = grandparent.parentNode;
console.log(greatGrandParent);
