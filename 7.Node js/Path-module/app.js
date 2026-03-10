const path = require("path");

//!getting file name from paths
// console.log(path.basename("/users/files/test.txt"));

//!getting the directory name
// console.log(path.dirname("/users/files/test.txt"));

//! getting the file extension
// console.log(path.extname('/users/files/text.html'));

//! Join paths (works accross operating system)
// console.log(path.join("/users", "files", "text.txt"));


//! getting absolute paths
// console.log(path.resolve('text.txt'));


//access special path properties
// console.log(__filename);
console.log(__dirname);
