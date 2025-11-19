const fs=require("fs");
//  this is a buffer fileand createreadstream is ia function that reads the file in chunks
const readable=fs.createReadStream("buffer.txt", { encoding:"utf-8"});
    readable.on("data", (chunk) => {
        console.log("New chunk received:", chunk.length);
    });
const readble =fs.createReadStream('buffer.txt');
const writable =fs.createWriteStream('copy.txt');
readable.pipe(writable);