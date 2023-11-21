// JavaScript ractice set 1
//--- Print numbers from 1 to 100 ---- I changed numbers from this to from 1 to 10 since we have to do it in all three loops for loop do while loop and while loop

function printNumbersPracticeSet(){
    let a = 0;
let b = 0;

console.log("for loop starts here");

for(let j = 0; j <= 10; j++){
    console.log(j);
}

console.log("do while loop starts here");

do {
    console.log(a);
    a++
} while (a <= 10);

console.log("while loop");

while (b <= 10) {
    console.log(b);
    b++;
}
}


// JS Practice set 2
//--- Function to add two numbers and return the result


function addNumbers(x,y){
    return x+y;
}

// console.log(addNumbers(2,1));

// JS Practice Set 3
//--- Area of rectangle from height and width do it in function


function areaCalculator(height,width){
    return height * width;
};

// console.log(areaCalculator(30,10));

// Doing this in arrow function

const areaOfRectangle = (h,w) => h*w;

// console.log(areaOfRectangle(30,10));


// JS Practice set 4
//---- Take a string and output its reversed version

let str = "jayantilal";
let name = "janak"

let stringReverse = (name) => name.split("").reverse().join("");

// console.log(stringReverse(name));


// JS Practice set 5
// Take input and check if its odd or even give return accordingly


function oddEvenChecker(oddEven){
   if(oddEven % 2 == 0){
    return "the given number is even"
   }else{
    return "the given number is odd"
   }
}

// console.log(oddEvenChecker(25)); // Outputs: "the given number is odd"
// console.log(oddEvenChecker(10)); // Outputs: "the given number is even"



//JS Prcatice set 6
// Function to check if given year is leap or not 


function leapYearChecker(year){
    if(year % 4 == 0){
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            return "The given year is a leap year";
        } else {
            return "The given year is not a leap year";
        }
    }else{
        return "The given year is not an leap year"
    }
}

// console.log(leapYearChecker(2024));
// console.log(leapYearChecker(1700));


// JS Practice set 7
// Find the sum of all elements in an array

let arrayNum = [1,2,3,4,9,8,7,6,5,4];

function arraySumCalculator(arrayNum){
    let sizeOfArray = arrayNum.length;
    let arrayCounter = 0;
    let sumOfArray = 0;

    while(arrayCounter < sizeOfArray){
        sumOfArray = sumOfArray + arrayNum[arrayCounter];
        arrayCounter++;
    }

    return sumOfArray;
}

// console.log(arraySumCalculator(arrayNum));



// JS Practice set 8
// An object with details of a car and method that starts its engine


let hondaCar = {
    make: "Honda",
    model: "Civic",
    yearOfManufacture: 2020,
    startEngineMethod: function(){
        console.log("The Engine have started");
    }
}



// hondaCar.startEngineMethod();



//JS Practice set 9
// Change paragraph text with js on web

/*
let paragraph = document.querySelector("p");

let changeParagrahButton = document.querySelector("button");
let buttonEvent = 0;

changeParagrahButton.addEventListener("click", function(){
    if(buttonEvent == 0){
        paragraph.innerHTML = "Janak Is the Best ";
        changeParagrahButton.innerHTML = "Go Back to fake world";
        buttonEvent = 1;
    }else{
        paragraph.innerHTML = "Sometimes you win, sometimes you learn";
        changeParagrahButton.innerHTML = "Tell truth";
        buttonEvent = 0;
    }

})

*/

// JS Prcatice set 10
// Create an button dynamically and then add it to the html file



// let newButton = document.createElement("button");

// newButton.innerHTML = "Click Me";

// document.body.appendChild(newButton);


// JS Practice set 11
// Show an alert when clicked on button


// let alertShowButton = document.querySelector("#alert");

// alertShowButton.addEventListener("click", function(){
//     alert("your code works");
// })

// JS Practice set 12
// A function to caculate factoria value of given number



function factorialOfNumberIs(n){
    let factorialLoopNum = 1; 
    let factorialOfN = 1;
    while(factorialLoopNum <= n){
        factorialOfN = factorialOfN * factorialLoopNum
        factorialLoopNum++;
    }

    return factorialOfN
}

// console.log(factorialOfNumberIs(20));




// JS Practice set 13
// --- Create an function to generate random number between given range

function randomNumberGenerator(max,min){
    let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomInteger;
}

// console.log(randomNumberGenerator(10,1));




// JS Practice set 14
// --- A functon that takes an arra and ony return array with even numbers


let numberArray = [1,2,3,4,5,6,7,8,9,10];

function returnEvenArrayNumbers(){
    let newArray = [];
    let arraySize = numberArray.length;
    let arrayChecker = 0;

    while(arrayChecker < arraySize){
        if (numberArray[arrayChecker] % 2 == 0){

            newArray.push(numberArray[arrayChecker]);
        }

        arrayChecker++;
    }

    return newArray;
}

// console.log(returnEvenArrayNumbers(numberArray));



// JS ractice set 15
// Using map to double the array numbers


let doubleThisArrayNumber = [1,2,3,4,5,6,7,8,9];

let ddoubledNumber = doubleThisArrayNumber.map(function(elements){
    return elements * 2
})

// console.log(ddoubledNumber);



//JS Prcactice set 16
//

