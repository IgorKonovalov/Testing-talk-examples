const ordersData = require("./data_1.json");

const calculateOrder = data => 
  data.items.reduce((accumulator, item) => {
    return accumulator + item.price;  
  }, 0)

const orderPrice = calculateOrder(ordersData)

console.log(orderPrice)