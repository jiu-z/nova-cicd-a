const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.text());

app.get('/', (req, res) => {
  console.log("lb neg get test");
  res.send('Hello Express.js!!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/user', (req, res) => {
  console.log("lb neg get use path");
  res.send('Hello path/user !!!');
});

app.post("/post", function (req, res) {
  console.log("lb neg post test");
  const apiKey = req.headers['x-api-key'];
  console.log("api key -->" + apiKey);
  res.send("lb neg post test ok --" + req.body +"api key -->" + apiKey);
});

