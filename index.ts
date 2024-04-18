#! usr/bin/env node
import inquirer from "inquirer";

console.log("number-guessing-game");
let ch;
let  randnumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
do{
let answer = await inquirer.prompt([{
    name : "usernumber",
    type: "number",
    message : "Enter your Guess Number(Number limit from 1-10) :",

}]);

if(answer.usernumber === randnumber){
    console.log("congratulation! you guess a correct number,");
    randnumber =  Math.floor(Math.random() * (10- 1 + 1)) + 1;
}

else{
    console.log("sorry, you guess a wrong number.")
}


ch=await inquirer.prompt([{
    name :"play",
    message:"Do You want play again ? ",
    type:"list",
    choices:["Yes","No"]
    }
    ])
}
while(ch.play=="Yes");