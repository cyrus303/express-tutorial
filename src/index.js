const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`running express server on PORT ${PORT}`);
});

app.get('/groceries', (request, response) => {
  console.log('welcome');
  response.send(groceryList);
});

app.post('/groceries', (request, response) => {
  console.log(request.body);
  groceryList.push(request.body);
  response.sendStatus(201);
});
