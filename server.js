const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const host = '0.0.0.0'
let msg = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>Server</h1>\n<p>Please use /showmsg to see any messages received');

})

app.post('/message', (req, res) => {
    console.log("Received message from client", req.body)
    res.send(req.body);
    msg.push(req.body);
})

app.get('/showmsg', (req, res) => {
    console.log("msg", msg);
    res.send(msg);
})

app.listen(port, () => {
  console.log(`app listening at http://${host}:${port}`);
})