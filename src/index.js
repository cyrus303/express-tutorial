const express = require('express');
const groceriesRoute = require('./routes/groceries');
const marketsRoute = require('./routes/markets');
const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/api', groceriesRoute);
app.use('/api/markets', marketsRoute);

app.listen(PORT, () => {
  console.log(`running express server on PORT ${PORT}`);
});
