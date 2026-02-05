//select button
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

//use previoussibling to get the preceeding paragraph
const text1 = button1.previousSibling;
const text2 = button2.previousSibling;

//change the text content of the preceeding paragraph
if (text1.nodeType === 3) {
  text1.textContent = "Text 1 Has been updated ";
}
if (text2.nodeType === 3) {
    text2.textContent='Text 2 has been changed '
}
