require('http').createServer((req, res) => {
  console.log(req.url)
  res.end('Hello Node.js Server!')
}).listen(8080, (err) => {
  if (err) return console.log('something bad happened', err);
  console.log(`server is listening on 3000`);
})