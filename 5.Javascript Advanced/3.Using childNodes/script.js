//step 1: select the outer div using id
const outer = document.getElementById("outerDiv");
console.log(outer);

//step 2 : navigate to the first child which is a text nodes
const firstchild = outer.childNodes[0];
console.log(firstchild);

//step 3: navigate to the second child which is the innerdIV
const innerdIV = outer.childNodes[1];
console.log(innerdIV);

//step 4 : select the first child of the innerdiv
const innerdivFirstChild = innerdIV.childNodes[0];
console.log(innerdivFirstChild);

//step 5: select the second child of the innerdiv
const innerdIVSecondChild = innerdIV.childNodes[1];
console.log(innerdIVSecondChild);
