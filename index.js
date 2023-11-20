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

