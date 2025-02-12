// Destructuring array
const numbers = [1, 2, 3, 4, 5];
const [a, b] = numbers;
console.log(a);
console.log(b);

const [x, , y] = numbers;
console.log(x);
console.log(y);

const [, , third] = numbers;
console.log(third);

console.log(numbers[numbers.length - 1]);

// Destructuring object
const user = { name: "Alice", age: 25, city: "New York" };

// const name = user.name;
// const age = user.age;
// const city = user.city;


const { name, age, city } = user;
console.log()

//Spread
const arr1 = [1, 2, 3, 7];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// // Create an Object and a copied Object with Object.assign()
// const originalObject = { enabled: true, darkMode: false };
// const secondObject = Object.assign({}, originalObject);

// console.log(secondObject); //{enabled: true, darkMode: false}

// Create an object and a copied object with spread

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

const fruits = ["🍏", "🍊", "🍌", "🍉", "🍍"];
//sao chép mảng fruits sang mảng moreFruits
const moreFruits = [...fruits];
console.log(moreFruits); // Array(5) [ "🍏", "🍊", "🍌", "🍉", "🍍"

const ocean = ["🐙", "🦀"];

const aquarium = [...ocean, "🐡"]; // Add a single value
const sushi = [...ocean, "🐡", "🍚"]; // Add multiple values]

aquarium; // ['🐙', '🦀', '🐡']
sushi; // ['🐙', '🦀', '🐡', '🍚']

// Original Array Not Affected
ocean; // ['🐙', '🦀']

//Rest
const [first, ...rest] = [10, 20, 30, 40];

console.log(first);
console.log(rest);


console.log("start");

setTimeout(() => {
    console.log("hiiii");
}, 2000);

console.log("end");

//call stack, callback queue, event loop