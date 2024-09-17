// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    {name: 'Basketball', price: 60, quantity: 30},
    {name: 'Shoes', price: 120, quantity: 10},
    {name: 'Jersey', price: 80, quantity: 20},
    {name: 'Hoop', price: 300, quantity: 5}
]; //This is my inventory array

console.log(inventory)


// Task 2: Create an Orders Array of Order Objects

const orders = [
    {
        customerName: 'Christian', 
        items: [ {name: 'Basketball', quantity: 3}, {name: 'Shoes', quantity: 1} ],
        orderStatus: 'Completed'
    },
    {
        customerName: 'LeBron',
        items: [ {name: 'Hoop', quantity: 1}, {name: 'Jersey', quantity: 2} ],
        orderStatus: 'Pending'
    },
    {
        customerName: 'Cade',
        items: [ {name: 'Jersey', quantity: 3}, {name: 'Basketball', quantity: 1} ],
        orderStatus: 'Pending'
    }
]; //These are my orders array

console.log(orders)


// Task 3: Create a Function to Place an Order

function placeOrder(customerName, orderedItems) {

    for (let orderedItem of orderedItems) {
        let product = inventory.find(item => item.name === orderedItem.name);
        if (product.quantity < orderedItem.quantity) //checks if ordereditems are more than the products currently in stock.
            {console.log (`We're sorry. ${orderedItem.name} is out of stock and this order cannot be completed.`);
            return;}
    }

    for (let orderedItem of orderedItems) {
        let product = inventory.find(item => item.name === orderedItem.name);
        product.quantity -= orderedItem.quantity //takes away the ordered items from the inventory
    }

    //orders.push will add this order to the orders array
    orders.push({
        customerName: customerName,
        items: orderedItems,
        orderStatus: 'Pending'
    })};

placeOrder('Joe', [ {name: 'Hoop', quantity: 6} ]) //tests when too many hoops are ordered, output message correctly displayed.    
placeOrder('Jolie', [{name: 'Hoop', quantity: 3}, {name: 'Jersey', quantity: 1}])

console.log(inventory) //checks the inventory after Jolie's order
console.log(orders) //checks the orders to see if Jolie's order has been included