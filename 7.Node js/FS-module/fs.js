const fs = require("fs");

const path = require("path");
//define a folder and file path
const folderpath = path.join(__dirname, "studentFolder");
const filepath = path.join(folderpath, "studentlists.txt");

//1.create a directory if ity dosenot exists
if (!fs.existsSync(folderpath)) {
  //create the folder
  fs.mkdirSync(folderpath);
  console.log("Folder created");
}

//2. create and write to a file
fs.writeFileSync(filepath, "List of student.\n");
console.log("file created and written");

//3.appened more content
fs.appendFileSync(filepath, "This is an appeneded line.\n ");

//4. Read the file content
const content=fs.readFileSync(filepath,'utf-8')
console.log(content);

//5.Delete a file
//fs.unlinkSync(filepath)