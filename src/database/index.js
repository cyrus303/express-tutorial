const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(
    `mongodb+srv://${process.env.UserName}:${process.env.Password}@${process.env.MongoDB_URI}/expressjs_tutorial`
  )
  .then(() => console.log('connected to DB'))
  .catch((err) => console.log(err));
