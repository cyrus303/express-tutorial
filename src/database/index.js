const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://Sachin:oiIYTc6Xva29zWqT@mongodb.7d1cjqv.mongodb.net/expressjs_tutorial'
  )
  .then(() => console.log('connected to DB'))
  .catch((err) => console.log(err));
