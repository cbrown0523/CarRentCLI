const { stringify } = require('querystring');
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


 let name = "";
 let car = "";
 let days = "";
 let price = "";
 let totalCost = days * price;
 
 let cars = [
    {   
        company: "Chevy",
        type :"Camaro 2SS",
        price: 70,
        days : ""
    },
    {
        company: "Ford",
        type : "Mustang GT",
        price: 90,
        days : ""
    },
    {
        company: "Dodge",
        type : " HellCat",
        price: 80,
        days : ""
    }
]


 
 rl.question("What is your name? \n Name: ", (answer) =>{
     
    console.log("Hello, " + answer);
    rl.question("What car do you want to rent: \n(please spell corectly)\nDodge \nChevy \nFord \n -> ", (car) =>{
     RentalCar.typeCar = car.toUpperCase();
        console.log(`You want to rent a ${RentalCar.typeCar}`); 
        rl.question("For how many days you want to rent: ", (numDays) =>{
            RentalCar.days = parseInt(numDays);
               console.log(`You want to rent for ${RentalCar.days} days`);
               switch(RentalCar.typeCar){
                case 'CHEVY' :
                    RentalCar.price = 60;
                    break;
                case 'DODGE' :
                    RentalCar.price = 100;
                    break;
                case 'FORD' :
                    RentalCar.price = 88;
                    break;
                    default :
                    console.log('something went wrong here!')

               }
                console.log( `You want to rent a ${RentalCar.typeCar} for ${RentalCar.days} days? Your total costs would be ${RentalCar.totalCost()}`)
               /*if(RentalCar.typeCar = "chevy"){
                 RentalCar.price = 60;
                  
               }*/
           })    
    })
})


/*if (cars[0].type.includes(hellcat)){
   ()=>{cars[0].days * cars[0].price

   }

    }
    for(i = 0 ; i < cars[0].length-1 ;  i++){

    }*/
