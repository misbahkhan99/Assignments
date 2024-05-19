"use strict";
/////****   Assignment Part 3: Colorful T-Shirts     ******/////
const tshirt = {
    name: "puma",
    price: 1000,
    color: "pink",
    productInventory: {
        stock: 10,
        colorOption: ["pink", "white", "red", "blue"],
        changeColor(newColor) {
            tshirt.color = newColor;
            if (newColor == "red") {
                console.log(tshirt.price + 100); // (increase 10% from actual price )
            }
            else if (newColor == "blue") {
                console.log(tshirt.price - 50); // (decrease 5% from actual price )
            }
            else {
                console.log(tshirt.price);
            }
        }
    }
};
tshirt.productInventory.changeColor("blue");
tshirt.productInventory.changeColor("red");
tshirt.productInventory.changeColor("pink");
