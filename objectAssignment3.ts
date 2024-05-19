/////****   Assignment Part 3: Colorful T-Shirts     ******/////

// Challenge:

// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object
// should have two properties:
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function
// accepts a new color string as an argument. When called, it should:
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g.,
// increase by 10% for red, decrease by 5% for blue).



type Product = {
    name : string,
    price:number
    color:string
    productInventory : {
    stock:number
    colorOption?: string[]
    changeColor(newColor:string): void
    }
}
const tshirt : Product  = {
    name: "puma",
    price : 1000,
    color: "pink",
    productInventory :{
    stock : 10,
    colorOption : ["pink","white" ,"red","blue"],
    changeColor(newColor:string){
     tshirt.color = newColor


     if (newColor == "red") {
        console.log(tshirt.price + 100); // (increase 10% from actual price )
     } else if (newColor == "blue") {
        console.log(tshirt.price - 50);  // (decrease 5% from actual price )
     } else {
        console.log(tshirt.price);
     }
     } 
   } 
}
    tshirt.productInventory.changeColor("blue")
    tshirt.productInventory.changeColor("red")
    tshirt.productInventory.changeColor("pink")
