const calculateOrder = require('./');

const data = {
  items: [
    {
      name: 'Cat',
      type: 'animal',
      quantity: 1,
      price: 40,
    },
    {
      name: 'Box for Cat',
      type: 'accessory',
      quantity: 2,
      price: 100,
    },
    {
      type: 'shipping',
      price: 50,
    },
  ],
};

describe('calculateOrder', () => {
  it('should calculate order totals correctly', () => {
    expect(calculateOrder(data)).toBe(240);
  });
});
