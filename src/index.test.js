const calculateOrder = require('./');

describe('calculateOrder', () => {
  it('should calculate order totals correctly', () => {
    expect(calculateOrder(data)).toBe(240);
  });
});
