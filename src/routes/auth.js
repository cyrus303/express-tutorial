const {Router} = require('express');

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

module.exports = router;
