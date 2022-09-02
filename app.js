'use strict';

console.log('Hello World!');


function greatUser(){
    let userName =prompt ("what is your name");
    document.write('HI ' + userName);
}
//let userName = greatUser
//document.write('HI + userName');
//console.log(userName)

const myName = 'hunter'
console.log(myName)

function addTwoNumbers(){
    let num1=prompt("put in a number")
    let num2=prompt("put in a number")
    let totalnumber= num1 + num2  
    document.write(totalnumber)
}


let x = 10;
console.log(x)

function petOwner(){
    let petOwner=prompt("Do you own a dog?")
    if(petOwner== 'yes'){
        document.write("Read list of bad food")
    } 
else if (petOwner== 'no'){
    document.write("If considering getting a dog please read")
    
}
else {
    alert("error please answer yes or no")
}
}


