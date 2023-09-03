const express = require('express');
const groceriesRoute = require('./routes/groceries');
const marketsRoute = require('./routes/markets');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/api', groceriesRoute);
app.use('/api/markets', marketsRoute);

app.listen(PORT, () => {
  console.log(`running express server on PORT ${PORT}`);
});
