const express = require('express');

const app = express();
const routes = require('./routes/index');

const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('', routes);

app.listen(PORT, () => {
  console.log('App running on port 3000...');
});
