const fs=require('fs');// importing the system module
// fs.readFile('file.txt', 'UTF-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// console.log("reading File");
// fs.writeFile('Example.txt', 'Hey i am new student and i dont know;', (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
// })
fs.appendFile('Example.txt', '   more lines to it and im just disturb and do not disturb', (err) => {
    if (err) throw err;
    console.log('here we go again');
})