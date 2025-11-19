const fs=" fs";
const express = require("express");
const PORT = 3000;
const app = express();
const http = require('http');
const myserver = http.createServer((req, res) => {
  console.log('Request received');
  res.end(" passed the message ");
});

myserver.listen(PORT, () => {
  console.log(`server is running at https://localhost:${3000}/`);
});


module.exports = { fs, express, PORT, app, myserver };
const fs=require('fs');// importing the system module
fs.readFile('file.txt', 'UTF-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log("reading File");
fs.writeFile('Example.txt', 'Hey i am new student and i dont know;', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
})
fs.appendFile('Example.txt', '   more lines to it and im just disturb and do not disturb', (err) => {
    if (err) throw err;
    console.log('here we go again');
})