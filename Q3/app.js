"use strict"
let people = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "Jane", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Johnson", age: 35 },
    { firstName: "Samantha", lastName: "Williams", age: 28 },
    { firstName: "Michael", lastName: "Brown", age: 40 },
    { firstName: "Emily", lastName: "Jones", age: 32 },
    { firstName: "Jacob", lastName: "Miller", age: 27 },
    { firstName: "Ashley", lastName: "Davis", age: 24 },
    { firstName: "Matthew", lastName: "Garcia", age: 31 },
    { firstName: "Olivia", lastName: "Rodriguez", age: 26 }
];

function sortPeople(item){
   return item.sort((a , b) => a.age - b.age)
}
console.log(sortPeople(people));