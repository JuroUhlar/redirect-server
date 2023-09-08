const express = require("express");
const app = express();
const port = 3000;

app.all("*", function (req, res) {
  console.log(req.url, req.path);
  return res.redirect(301, `https://fingerprinthub.com${req.path}`);
});

app.listen(port, () => console.log(`Redirector ${port}!`));
