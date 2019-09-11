const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Hema and Bryan");
});

module.exports.app = app;
