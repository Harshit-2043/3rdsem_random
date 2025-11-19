const PORT=3000
const http =require('http');
const myserver = http.createServer((req, res) => {
  console.log('Request received');
  res.end(" passed the message ");
})
// const PORT=proccess.env.PORT || 6000
myserver.listen(PORT,()=> {
    console.log(`server is running at https://localhost:${3000}/`)                      
}); 