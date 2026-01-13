/*🔹 JavaScript Data Types are divided into 2 types
1️⃣ Primitive Data Types
2️⃣ Non-Primitive (Reference) Data Types

1️⃣ Primitive Data Types (7 types)

Primitive types store single values and are immutable.*/

/*1. Number

Used for numbers (integer & decimal)*/

let a = 10;
let b = 3.14;
console.log(b)

/*2. String

Used for text*/

let name = "Rahul";
let msg = 'Hello';
console.log(msg)

/*3. Boolean

Used for true or false*/

let isLogin = true;
let isPassed = false;
console.log(isLogin)

/*4. Undefined

Variable declared but not assigned any value*/

let x;
console.log(x); // undefined

/*5. Null

Represents empty or no value*/

let y = null;

/*6. BigInt

Used for very large numbers*/

let big = 12345678901234567890n;

/*7. Symbol

Used to create unique values*/

let id = Symbol("id");

/*2️⃣ Non-Primitive (Reference) Data Types

These store multiple values and are mutable.

1. Object

Stores data in key-value pairs*/

let student = {
  name: "Amit",
  age: 21,
  cgpa: 8.2,
  isPassed: true
};

student["age"] = student[age] + 1; 

console.log(student.age)
console.log(student[cgpa]);





