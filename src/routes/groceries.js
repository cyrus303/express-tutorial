const {Router} = require('express');

const router = Router();

router.use((request, response, next) => {
  console.log(request.session);
  if (request.session.user) {
    next();
  } else {
    response.sendStatus(401);
  }
});

const groceryList = [
  {
    item: 'milk',
    quantity: '2',
  },
  {
    item: 'cereal',
    quantity: '1',
  },
  {
    item: 'bread',
    quantity: '1',
  },
];

router.get('/', (request, response) => {
  console.log('welcome');
  response.cookie('visited', true, {
    maxAge: 60000,
  });
  response.send(groceryList);
});

router.get('/:item', (request, response) => {
  console.log(request.cookies);
  const {item} = request.params;
  const groceryItem = groceryList.find(
    (element) => element.item === item
  );
  response.send(groceryItem);
});

router.post('/', (request, response) => {
  console.log(request.body);
  groceryList.push(request.body);
  response.sendStatus(201);
});

router.get('/cart', (request, response) => {
  const {cart} = request.session;
  if (!cart) {
    response.send('you have no items in cart');
  } else {
    response.send(cart);
  }
});

router.post('/cart/item', (request, response) => {
  const {item, quantity} = request.body;
  const cartItem = {item, quantity};
  const {cart} = request.session;

  if (cart) {
    request.session.cart.items.push(cartItem);
  } else {
    request.session.cart = {
      items: [cartItem],
    };
  }

  response.sendStatus(201);
});

module.exports = router;
