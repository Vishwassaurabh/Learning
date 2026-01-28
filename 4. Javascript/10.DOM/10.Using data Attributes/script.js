// user `getAttribute` and `setAttributes`

const userCard = document.getElementById("userCard");
//console.log(userCard);

const userid = userCard.getAttribute("data-user-id");
//console.log(userid);

const userrole = userCard.getAttribute("data-user-role");
//console.log(userrole);

//modifying data attributes
userCard.setAttribute("data-user-role", "super-admin");
userCard.setAttribute("data-user-possition", "manger");
console.log(userCard);

//using the dataset
const userRole = userCard.dataset.userRole;
console.log(userRole);

const userid2 = userCard.dataset.userId;
console.log(userid2);
