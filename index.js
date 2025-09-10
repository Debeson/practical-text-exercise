// 1. string output / input 
let firstName = prompt("Enter First Name:");
let LastName = prompt("Enter Last Name:");

// string concatenation
alert("Your fullname is " + firstName + " " + LastName);

// template literal
alert(`your fullname is ${firstName} ${LastName}`);


// 2. condition and comparison operator
let age = prompt("Enter your age");

if (age < 13){
    alert("you are a child");
}else if (age >= 13 && age < 19){
    alert("you are a tenager");
}else{
    alert("You are an adult");
}



// 3 for loop
for (let i = 1; i <= 10; i++){
    // prints numbers 1--10
    console.log(i)


    // modify to print only even number between 1 and 10
    if (i % 2 === 0){
        console.log(i)
    }
}



// 4. function 
// function declaration
function greet(name){
    return `Hello, ${name}!`;
}
console.log(greet("Debeson"))

// function Expression]\[]
const greetings = function (name){
    console.log(`Hello, ${name}!`);
}
greetings("Trader Debeson")


// Arrow function
const hello = (name) => {
    console.log(`Hello, ${name}!`);
}
hello("Chidi");


// 5. Parameters and return 

const addNumbers = (a, b) =>{
    return a + b;
}
alert(addNumbers(1, 3));

// 6. scope
let x = 10;

function addnum(){
    let x = 20; //x = 10 is in local scope variable because it is decleared inside of a function
    console.log(x);
}

addnum();
console.log(x); //x = 10 is a global scope variable= because it is decleared outside outside of a function



// 7. Arrays
let fruits = [
    "mango",
    "orange",
    "apple",
];
console.log(fruits)

fruits.push("pineapple");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("watermelon");
console.log(fruits);


// 8. OBJECT
const student = {
    name: "Debeson",
    age: 30,
    grade: "c",
}

console.log(student.name);

student.grade = "A";

console.log(student);



//  still working on 9 and 10



// 9. DOM SELECTING AND CHANGING CONTENT 
let greet = document.getElementById("p");
greet.innerHTML = "welcome Student";

let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     alert("i got clicked")
// })

function clicked(){
    alert("i got clicked");
}