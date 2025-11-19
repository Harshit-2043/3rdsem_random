const http =require('http');
const fs = require('fs');
const PORT = 5001;

const myserver = http.createServer((req, res) => {
    console.log("Request received");
    // res.end("passed the message");
        switch (req.url){
        case '/': res.end('Welcome to the home page');
        break;
        case '/login': res.end('This is the login  page');
        break;
        case '/about': res.end('This is the about page');
        break;
        default:  res.end('Page not found');
    };
    });
myserver.listen(PORT, () => {
    // fs.appendFile("file.txt", " done succesfuly ", (err) => {
    //     if (err) {
    //         console.error("Error writing to file:", err);
    //     } else {
    //         console.log("File written successfully");
    //     }
    // });

    console.log(`server is running at http://localhost:${PORT}/`);
});