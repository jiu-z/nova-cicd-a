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

app.get('/v1/abc/get', (req, res) => {
  console.log("lb neg get /v1/abc/get path");
  res.send('Hello path/ -->>/v1/abc/get !!!');
});

app.post("/v1/abc/post", function (req, res) {
  console.log("lb neg -->> /v1/abc/post test!!!");
  const apiKey = req.headers['x-api-key'];
  console.log("api key -->" + apiKey);
  res.send("lb neg post test ok --" + req.body +"| api key -->" + apiKey);
});

app.post("/v1/abc/product/:paramValue", function (req, res) {
  console.log("lb neg -->> /v1/abc/product/:paramValue test!!!");
  const apiKey = req.headers['x-api-key'];
  console.log("api key -->" + apiKey);

  // req.params を使用してパスパラメータの値を取得します
  const paramValue = req.params.paramValue;

  res.send("lb neg post test ok -- Param Value: " + paramValue + " | API Key: " + apiKey);
});

// 動的パスパラメータを使用して、{xxxxxxx} の値を取得します
app.get("/v1/abc/users/:paramValue", function (req, res) {
  console.log("lb neg -->> /v1/abc/users/:paramValue test!!!");
  const apiKey = req.headers['x-api-key'];
  console.log("api key -->" + apiKey);

  // req.params を使用してパスパラメータの値を取得します
  const paramValue = req.params.paramValue;

  res.send("lb neg get test ok -- Param Value: " + paramValue + " | API Key: " + apiKey);
});