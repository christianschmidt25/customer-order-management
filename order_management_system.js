// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    {name: 'Basketball', price: 60, quantity: 30},
    {name: 'Shoes', price: 120, quantity: 10},
    {name: 'Jersey', price: 80, quantity: 20},
    {name: 'Hoop', price: 300, quantity: 5}
];


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
];

console.log(orders)
