//my first node js code
// console.log("hello from Node.js!");

const username = "vishwas";
const currenttime = new Date();
const hours = currenttime.getHours();

let greeting;
if (hours < 12) {
  greeting = "good morning";
} else if (hours < 18) {
  greeting = "good afternoon";
} else {
  greeting = "good evening";
}

console.log(`${greeting},${username}! welcome to nodejs`);
