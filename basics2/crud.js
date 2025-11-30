// Import:

const fs = require("fs");

// Write a file
fs.writeFileSync("demo.txt", "Hello Node!");

// Read a file
const data = fs.readFileSync("demo.txt", "utf8");
console.log(data);

//Append to file
fs.appendFileSync("demo.txt", "\nNew line added");

//Delete file
fs.unlinkSync("demo.txt");