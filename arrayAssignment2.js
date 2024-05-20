"use strict";
const products = [
    {
        name: "iPhone 15",
        price: 650000,
        inventory: {
            stock: 20,
            colorOption: ["red", "blue", "pink", "black"]
        },
    },
    {
        name: "MacBook",
        price: 150000,
        inventory: {
            stock: 20,
            colorOption: ["red", "blue", "pink", "black"]
        },
    },
    {
        name: "smart watch",
        price: 50000,
        inventory: {
            stock: 20,
            colorOption: ["red", "blue", "pink", "black"]
        },
    },
];
function changeColor(products, newColor) {
    products.inventory.colorOption.push(newColor);
    switch (products.inventory.colorOption) {
        case ["red"]:
            console.log(products.price *= 0.1);
            break;
        case ["blue"]:
            console.log(products.price *= -0.05);
            break;
        default:
            console.log(products.price);
            break;
    }
}
changeColor(products[0], "green");
products.forEach((product) => console.log(product));
