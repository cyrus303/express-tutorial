const {Router} = require('express');
const User = require('../database/schemas/User');

const router = Router();

router.post('/login', (request, response) => {
  const {userName, password} = request.body;
  if (userName && password) {
    if (request.session.user) {
      response.send(request.session.user);
    } else {
      request.session.user = {
        userName,
      };
      response.send(request.session);
    }
  } else {
    response.sendStatus(401);
  }
  console.log(request.session);
});

router.post('/register', async (request, response) => {
  const {username, password, email} = request.body;
  const userDB = await User.findOne({$or: [{username}, {email}]});
  if (userDB) {
    response.send('User already exists');
  } else {
    const newUser = await User.create({username, password, email});
    response.send('User created');
  }
});

module.exports = router;
