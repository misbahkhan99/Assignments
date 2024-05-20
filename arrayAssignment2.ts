/////****     Part 1: Basic Arrays - Product Inventory     ****////
// Challenge:
// 1. Define a type alias named Product to represent a product with the following
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.
// 2. Create an array named products containing at least three product objects. Each
// product object should include a name, price, and inventory details.
// 3. Implement a function named changeColor that takes a product object and a new
// color as input. This function should update the color property of the product and
// adjust the price based on the new color (implement your own logic, e.g., increase by
// 10% for red, decrease by 5% for blue).
// 4. Display each product's name, price, stock, and available colors. Iterate through the
// products array and print each product's details.
type Product = {
    name:string;
    price:number;
    inventory:{
    stock:number;
    colorOption: string[];
    };
};
    
const products : Product[] = [
   {
    name:"iPhone 15",
    price:650000,
    inventory:{
        stock:20,
        colorOption:["red","blue","pink","black"]
    },
   },
   {
    name:"MacBook",
    price:150000,
    inventory:{
        stock:20,
        colorOption:["red","blue","pink","black"]
    },
   },
   {
    name:"smart watch",
    price:50000,
    inventory:{
        stock:20,
        colorOption:["red","blue","pink","black"]
    },
   },
   

]
    
function changeColor ( products:Product, newColor:string) : void {
    products.inventory.colorOption.push(newColor)
    switch (products.inventory.colorOption ) {
        case ["red"]:
            console.log(products.price *= 0.1);
            break;
        case ["blue"]:
            console.log(products.price *= -0.05);
            break;
        default:
           console.log(products.price)
            break;
    }
}		
changeColor(products[0], "green")
products.forEach((product) => console.log(product));
