//Define a function with two parameters, assigning a default value to the second one. Call it with both one and two arguments, and show the outputs.

function greet(para1, para2 = "Hello") {
    return `${para2.toUpperCase()} ${para1.toUpperCase()}! `;
}

console.log(greet("world"));         
console.log(greet("world", "Welcome")); 

//Create a function that takes a name and a city as input and returns a multi-line message using template literals, incorporating both variables.

function countyDetails(name1,city) {
    return `Hello ${name1}
welcome to ${city}`
}

console.log(countyDetails('Saj','USA'));

//Refactor a given function that multiplies two numbers into an arrow function, reducing its body to the minimum

let multipliesNumber =(params1,params2) => params1 * params2 ;
console.log(multipliesNumber(2,5));

//Combine two arrays using the spread operator and find the maximum value in the merged array.

let array1 = [2,5,8,3,90];
let array2 = [...array1,2,6,7,3,10];
console.log(array2);
console.log(Math.max(...array2));

//Create an object with properties name, age, and country, and use destructuring to extract them into variables. Also, destructure an array of five numbers to get the first two elements.

let personDetails = {
    personName : 'fahad',
    age : 20,
    country : 'BD'
}
let {personName,age,country} = personDetails
// let addd = [personDetails.personName,personDetails.age];
// console.log(...addd);
console.log(age);
console.log(personName);
console.log(country);

let arryDe = [2,5,41];
let [first,second] = arryDe;
console.log(first,second);

//Access the city property of a nested object using both dot notation and optional chaining.

let nestedObjet = {
    nameNasted: 'fahad',
    age : 60,
    adress : {
        city : 'Dhaka',
        country: 'BANGLADESH'
    } 
}

let nestedDotNotaion = nestedObjet.adress.city;
console.log("nested object using both dot notation:",nestedDotNotaion);

let nestedOptionalChaining= nestedObjet.adress?.country;
console.log('OPTIONAL CHAINING:',nestedOptionalChaining);



