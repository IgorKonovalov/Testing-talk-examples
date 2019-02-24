// npm i eslint eslint-plugin-prettier eslint-config-prettier prettier -D

const data = {
  type: 'retail',
  items: [
    {
      name: 'Cat',
      quantity: 1,
      price: 40,
    },
    {
      name: 'Box for Cat',
      quantity: 2,
      price: 100,
    },
  ],
  shipping: false,
};

const calculateOrder = data => {
  return data.items.reduce((accumulator, value) => {
    return accumulator + value.price * value.quantity;
  }, 0);
};

const orderPrice = calculateOrder(data);

/* eslint-disable-next-line */
console.log(orderPrice);
