const {Router} = require('express');

const router = Router();

const itemsList = [
  {
    id: 1,
    name: 'Apples',
    price: 2,
    category: 'Fruits',
  },
  {
    id: 2,
    name: 'Bread',
    price: 1,
    category: 'Bakery',
  },
  {
    id: 3,
    name: 'Milk',
    price: 2,
    category: 'Dairy',
  },
  {
    id: 4,
    name: 'Eggs',
    price: 4,
    category: 'Dairy',
  },
  {
    id: 5,
    name: 'Chicken',
    price: 6,
    category: 'Meat',
  },
];

router.get('/', (request, response) => {
  const {price} = request.query;
  if (!isNaN(+price)) {
    const filtredList = itemsList.filter(
      (element) => element.price > price
    );
    response.send(filtredList);
  } else {
    response.send(itemsList);
  }
});

router.get('/:itemName', (request, response) => {
  const {itemName} = request.params;
  const item = itemsList.find(
    (element) => element.name.toLowerCase === itemName.toLowerCase
  );
  response.send(item);
});

router.post('/', (request, response) => {
  itemsList.push(request.body);
  response.sendStatus(201);
});

module.exports = router;
