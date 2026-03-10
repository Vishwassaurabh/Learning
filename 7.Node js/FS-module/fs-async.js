const fs = require("fs").promises;

const path = require("path");
//define a folder and file path
const folderpath = path.join(__dirname, "product");
const filepath = path.join(folderpath, "product.txt");

//1.create a directory if ity dosenot exists
async function createFolder() {
  try {
    await fs.access(folderpath);
  } catch (error) {
    await fs.mkdir(folderpath);
    console.log("folder created");
  }
}

createFolder();

async function writefile() {
  try {
    await fs.writeFile(filepath, "This is for product lists.\n");
    console.log("file created successfully");
  } catch (error) {
    console.log(error);
  }
}
writefile();

async function appenedTofile() {
  try {
    await fs.appendFile(filepath, "Goods sold.\n");
    console.log("content appened");
  } catch (error) {
    console.log(error);
  }
}
appenedTofile();

async function readfile() {
  try {
    const content = await fs.readFile(filepath, "utf-8");
    console.log("content");
  } catch (error) {
    console.log(error);
  }
}
readfile();

async function deletefile() {
  try {
    const content = await fs.unlink(filepath);
    console.log("file deleted");
  } catch (error) {
    console.log(error);
  }
}
//deletefile();
