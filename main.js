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

//Given an array of student objects with properties name and marks, use:map() to extract the names.
//filter() to return students with marks above 80.
//find() to get the first student with marks over 90.

let arrayOfStudent = [
    {name:'ali',marks:90},
    {name:'alif',marks:75},
    {name:'alifa',marks:78},
    {name:'alifatul Zohra',marks:82},

]
let studentMap = arrayOfStudent.map(item=>item.name);
console.log(studentMap);
let studentFilter = arrayOfStudent.filter(item=>item.marks>80);
console.log(studentFilter);
let studentFind = arrayOfStudent.find(item=>item.marks>80);
console.log(studentFind); //ফাইন্ড শর্ত পূরন করা প্রথম উপাদান ই শো করে। 

//Use forEach() on an array of objects (e.g., products with name and price) to log a message with each product's details.

let arrayEach = [
    {name:'water',price:90},
    {name:'napa',price:75},
    {name:'gas pipe',price:78},
    {name:'salt',price:82},
]

arrayEach.forEach(item=>{
    let details = `Product: ${item.name}, price: ${item.price}`
    console.log(details);
    
})




