/////*****    Assignment Part 2: Car Details     *****///////

// Challenge:

// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the
// engine's horsepower

type Car = {
    name: string,
    engine: {
        horsepower: number,
    }
    getHorsepower: () => any 
}

let cars : Car = {
    name: "Civic X",
    engine: {
        horsepower: 2000,
    },
   getHorsepower: ()  => {
    console.log("civic X has 2000 hp engine");
   }
} 
cars.getHorsepower()

