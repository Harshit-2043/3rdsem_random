const http=require('http');
const PORT =5001;
const server=http.createServer((req, res) => {
    console.log(" Request received");
    res.end(" passed the message ");
    const log=`${Date.now()} is the recent time which is shown in the console`;
    fs.appendfile('log.txt', log, (err) => {
        if (err) throw err;
        console.log('Log has been saved!');
    });
});
server.listen(PORT, () => {
    console.log(`server is running at https://localhost:${PORT}/`);
});
