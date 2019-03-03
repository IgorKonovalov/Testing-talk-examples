const calculateOrder = require('./');
const ordersData = require('./orders_data.json');

describe('calculateOrder', () => {
  it('should calculate order totals correctly', () => {
    expect(calculateOrder(ordersData)).toBe(1100);
  });
});
