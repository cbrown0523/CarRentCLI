const readline = require('readline');
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

 let RentalCar = {
     typeCar : "",
     days : "",
     price : "",
     totalCost : function(){
         return RentalCar.days * RentalCar.price;
     }
 }

 
 let availableCars = [
    {   
        company: "Chevy",
        type :"Camaro 2SS",
        price: 70,
        days : "",
    },
    {
        company: "Ford",
        type : "Mustang GT",
        price: 90,
        days : "",

    },
    {
        company: "Dodge",
        type : "HellCat",
        price: 80,
        days : "",

    }
]

let rentedCars = [];

main()
let userName;
function main() {
    let msg = "What is your name? \n Name: "
    rl.question( msg, (name) => { 
        userName = name;
        console.log("Hello, " + name);
        return selectCar()
 })
}

function selectCar(){
    let msg2 = "\nWhat car do you want to rent: \n"
    let count = 1;
    availableCars.forEach((car)=> {
        msg2 += `${(count)}  ${(car.company)} ${(car.type)}\n`
        count++
    });
    
    msg2 += 'Selection: ';
    rl.question(msg2, (carChoice) => {
       let  carIndex = carChoice - 1;
        if(Number.isNaN(carIndex) || carIndex < 0 || carIndex > availableCars.length - 1) {
            console.log('Error Please enter a number again');
           return selectCar()
        }
        else{
            
            RentalCar.typeCar =`${availableCars[carIndex].company} ${availableCars[carIndex].type}`;
            RentalCar.price = availableCars[carIndex].price;
            rentedCars.push(availableCars.splice(carIndex, 1));    /*.splice(carIndex, 1));*/
            console.log(`\nYou want to rent a ${RentalCar.typeCar}`); 
            selectDay()
        }
           
}
    )}    
    function selectDay(){
        rl.question("For how many days you want to rent: ", (numDays) =>{
            RentalCar.days = parseInt(numDays);
            if (Number.isNaN(RentalCar.days)) {

                console.log("Please select a number");
                selectDay();
    
            } else {
    
                console.log( `\nYou want to rent a ${RentalCar.typeCar} for ${RentalCar.days} days? Your total costs would be ${RentalCar.totalCost()}\n`)
                rl.question("Would you like to rent another car?\n(y/n): ", (answer) =>{
    
    
                    if ( answer.toLowerCase()[0] != 'y' || availableCars.length == 0) {
                        console.log("\nThank you " + userName );
                        rl.close();
                    } else {
                        selectCar();
                    }
                })
    
            }
    
        })    
    
    }