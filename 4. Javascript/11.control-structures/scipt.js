//! if statments

// let age = 18;

// if (age >= 16) {
//   console.log("you are eligible to drive");
// } else if (age >= 18) {
//   console.log("you are eligible to vote");
// } else {
//   console.log("you are to young to vote and drive");
// }

//! switch statments
const day = 6;
let dayName;
switch (day) {
  case 1:
    dayName = "monday";
    console.log(dayName);
    break; //return
    
  case 2:
    dayName = "tuesday";
    console.log(dayName);
    break;

  case 3:
    dayName = "wednesday";
    console.log(dayName);
    break;

  case 4:
    dayName = "Thursday";
    console.log(dayName);
    break;

  case 5:
    dayName = "friday";
    console.log(dayName);
    break;

  case 6:
    dayName = "saturday";
    console.log(dayName);
    break;

  case 7:
    dayName = "sunday";
    console.log(dayName);
    break;

  default:
    dayName = "invalid day";
    console.log(dayName);
}
