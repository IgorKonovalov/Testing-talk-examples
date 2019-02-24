const calculateOrder = data => {
  return data.items
    .filter(item => item.type !== 'shipping')
    .reduce((accumulator, value) => {
      return accumulator + value.price * value.quantity;
    }, 0);
};

module.exports = calculateOrder;
