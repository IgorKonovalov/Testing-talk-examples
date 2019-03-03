const calculateOrder = data => {
  const itemPrice = data.items
    .filter(item => item.type !== 'shipping')
    .reduce((accumulator, item) => {
      return item.quantity
        ? accumulator + item.price * item.quantity
        : accumulator + item.price;
    }, 0);

  const shippingItem = data.items.find(item => item.type === 'shipping');
  if (itemPrice < 1000) {
    return itemPrice + shippingItem.price;
  }
  return itemPrice;
};

module.exports = calculateOrder;
