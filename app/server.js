const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js App monitored by Netdata!');
});

app.get('/load', (req, res) => {
  let x = 0;
  for (let i = 0; i < 1e7; i++) x += Math.sqrt(i);
  res.send('Heavy load simulated, x=' + x);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
