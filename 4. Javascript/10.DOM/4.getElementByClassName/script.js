// selecting all element with class name "fiction"

const fictionbook = document.getElementsByClassName("fiction");

// selecting all element with class name "non-fiction" within the
// nonfictionsection

const nonfictionbook = document.getElementById("nonfictionsection");
const nonfiction = nonfictionbook.getElementsByClassName("non-fiction");
// console.log(nonfictionbook);

// console.log(nonfiction[1]);

// console.log(fictionbook);

// loop throught the HTMLCollection

//First convert into an array
const fictionbookEl = Array.from(fictionbook);

const fictionbooktitle = fictionbookEl.map((el) => el.innerHTML);
console.log(fictionbooktitle);
