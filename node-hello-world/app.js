const express = require('express');
const bodyParser = require('body-parser'); // 引入 body-parser
const app = express();
const port = 8080;

app.use(bodyParser.json()); // 使用 body-parser 中间件来解析 JSON 请求体

app.get('/', (req, res) => {
  res.send('Hello Express.js!!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/user', (req, res) => {
  res.send('Hello path/user !!!');
});

app.post("/create", function (req, res) {
  console.log(1111);
  res.send(req.body.msg);
});
