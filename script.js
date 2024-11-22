//first-class functions

//example 1
function greeting() {
    console.log("Hello");
}
greeting();
greeting.lang = "English";
console.log(greeting.lang); //adding properties to function. not a good practice
console.log(greeting);

console.log("---");

//example 2
//assigning a fn to a variable
function greet() {
    console.log("Namaste");
}
var msg = greet; //copies reference
msg();
msg.lang = "English"; //modifies greet also as it is used by reference
console.log(msg.lang);
console.log(greet.lang);

console.log("---");

//example 3
//returning a fn from another fn
function fullName(id) {
    if (id == 1) {
        name = "Puneet";
    }
    return function (name) {
        console.log(name);
    };
}
let detail = fullName(1);
console.log(detail);
detail("Puneet");

console.log("---");

//example 4
//passing a function as argument
function properties(callback) {
    console.log("Area is: " + callback(2, 3));
}
function area(a, b) {
    return a * b;
}
properties(area);

console.log("---");

//Call method
//example 1
var name1 = {
    firstName: "Puneet",
    lastName: "Rawat",
    printName: function () {
        console.log(this.firstName + " " + this.lastName); //this points to 'name' method
    },
};
name1.printName(); //calling method of name1

console.log("---");

var name2 = {
    firstName: "John",
    lastName: "Doe",
};

name1.printName.call(name2); //calling method of name1 by passing name2 as reference

console.log("---");

//example 2
var name3 = {
    firstName: "Jake",
    lastName: "Smith",
    printName: function (str) {
        console.log(this.firstName + " " + this.lastName + " from " + str); //this points to 'name' method
    },
};
name3.printName("Ajmer");

var name4 = {
    firstName: "Mike",
    lastName: "Hall",
};

name3.printName.call(name4, "Jaipur"); //calling method of name3 by passing name4 as reference and passing arguments

console.log("---");

//example 3
var name5 = {
    firstName: "Tom",
    lastName: "Wood",
};
var name6 = {
    firstName: "Ben",
    lastName: "Fox",
};

function printFullName(hometown, state) {
    console.log(
        this.firstName +
            " " +
            this.lastName +
            " from " +
            hometown +
            ", " +
            state
    );
}

console.log("---");

//calling print method by passing objects as reference
printFullName.call(name5, "Jaipur", "Rajasthan");
printFullName.call(name6, "Pune", "Maharashtra");

console.log("---");

//example 4
var name7 = {
    firstName: "Sam",
    lastName: "Hill",
};
var name8 = {
    firstName: "Samy",
    lastName: "Cole",
};

function printFullName(hometown, state) {
    console.log(
        this.firstName +
            " " +
            this.lastName +
            " from " +
            hometown +
            ", " +
            state
    );
}
//in apply method we pass arguments as an array list
printFullName.apply(name7, ["Jaipur", "Rajasthan"]);
printFullName.apply(name8, ["Pune", "Maharashtra"]);

console.log("---");

//bind method creates a new method and binds it to the object passed as reference
let printNewName = printFullName.bind(name7, "Udaipur", "Rajasthan");
let printNewName1 = printFullName.bind(name8, "Jodhpur", "Rajasthan");
printNewName(); //calling new function created
printNewName1(); //calling new function created

console.log("---");

//Immediately Invoked Function Expressions (IIFE)
//example 5 - normal function
(function one() {
    console.log("this is an iife function");
})();

console.log("---");
//exapmle 6 - function with parameter
(function one(name) {
    console.log("passing argument", name);
})("Alice");

console.log("---");
//exapmle 7 - arrow function
(() => {
    console.log("this is iife arrow function");
})();

console.log("---");
//example 8 - asynchronous function
(async () => {
    let raw = await fetch("https://randomuser.me/api/");
    let data = await raw.json();
    console.log(data);
})();
console.log("---");
