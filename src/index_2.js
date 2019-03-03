const ordersData = require("./data_2.json");

const calculateOrder = data => 
  data.items.reduce((accumulator, item) => {
    return item.quantity ? accumulator + item.price * item.quantity : accumulator + item.price;  
  }, 0)

const orderPrice = calculateOrder(ordersData)

console.log(orderPrice)