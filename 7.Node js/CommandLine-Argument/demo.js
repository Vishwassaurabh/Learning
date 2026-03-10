console.log("command line");

function greetuser(name) {
  console.log(`Good day ${name}`);
}


const getuser = process.argv[2];
greetuser(getuser);

