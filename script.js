console.log("----------Variables and Data Types")
// string
let countryName = "Kenya"; 
console.log(`Country: ${countryName} (Type: ${typeof(countryName)})`)
// number
const totalCounties = 47;
console.log(`totalCounties: ${totalCounties} (Type: ${typeof(totalCounties)})`)
// boolean
let isCountryLandLocked = false
console.log(`Landlocked Country: ${isCountryLandLocked} (Type: ${typeof(isCountryLandLocked)})`)
// array
let cities = ["Nairobi", "Nakuru", "Mombasa", "Kisumu", "Eldoret"]
console.log(`Cities: ${cities} (Type: ${typeof(cities)})`)
// dictionary / hashtable
let countyCode = {"Nairobi": 47, "Nakuru": 32, "Mombasa": 1, "Kisumu": 42}
console.log(`County code: ${countyCode} (Type: ${typeof(countyCode)})`)

console.log("------------Operators");

let firstNumber = prompt("Enter the first number: ");
let secondNumber = prompt("Enter the second number: ");
let operator = prompt("Chooce operation (+, -, *, /): ");

if (operator === "-"){
    let result = Number(firstNumber) - Number(secondNumber);
    console.log(`Result: ${result}`);
}else if (operator === "+"){
    let result = Number(firstNumber) + Number(secondNumber);
    console.log(`Result: ${result}`);
}else if (operator === "*"){
    let result = Number(firstNumber) * Number(secondNumber);
    console.log(`Result: ${result}`);
}else if (operator === "/"){
    let result = Number(firstNumber) / Number(secondNumber);
    console.log(`Result: ${result}`);
}else{
    alert("bad input!");
};

console.log("-----------functions");

let userName = prompt("Enter your name: ");

function greetUser(name){
    return console.log(`<p>Hello ${userName}</p>`);
};
greetUser(userName);

console.log("-----------JS control structures");

const age = prompt("Enter your age: ");

if (Number(age) >= 18){
    console.log(`<p>You are eligible to vote</p>`);
}else{
    console.log(`<h1>You are NOT eligible to vote</h1>`);
};

console.log("------------JS LOOPS");

const list = document.createElement("li");
const body = document.querySelector("body");

for (let i = 1; i <= 10; i++){
    const item = document.createElement("ol");
    item.textContent = i;
    list.appendChild(item);
};
body.appendChild(list);

console.log("---------------intro to DOM");

const h1 = document.querySelector("h1")
h1.textContent = "Javascript in Action!";

const dynamic = document.getElementById("dynamic-content");
dynamic.innerHTML = "<p>This content was added dynamically using Javascript</p>";