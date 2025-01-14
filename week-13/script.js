/////////////////////////////////////
//           STRING                //
/////////////////////////////////////
// const text = "JavaScript is fun";
// console.log(text.slice(0, 5) + "..." + text.slice(-5)); // "JavaScript" ;khong lay 10
// console.log(text.slice(11)); // "is fun" // 1->end
// console.log(text.slice(-5)); // "fun" (chỉ số âm tính từ cuối chuỗi)

// const text = "JavaScript";
// console.log(text.substring(0, 4)); // "Java"
// console.log(text.substring(4)); // "Script"
// console.log(text.substring(4, 0)); // "Java" (hoán đổi tham số)
// console.log(text.substring(-4, 4)); // "Java" (chỉ số âm được coi là 0)

// const txt = "   Hello world     ";
// console.log(txt.trim());

// const text = "JavaScript is awesome";
// console.log(text.includes("Java", 0)); // TRUE - FALSE

// SPLIT

// const text = "apple,banana,cherry";
// console.log(text.split(","));
// console.log(text.split(",", 2));
// let arr = text.split("");
// console.log(arr)

// const text = "JavaScript is awesome";
// console.log(text.indexOf("Script", 10));

// const text = "I love JavaScript";
// console.log(text.replace("Javascript", "Python")); // thay 1
// console.log(text.replaceAll("Javascript", "Python"));

// console.log(text.charAt(2));
// console.log(text.at(-3));

/////////////////////////////////////
//          ARRAY                  //
/////////////////////////////////////

// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// console.log(fruits);

// const arr = [1, 2];
// arr.push(3, 4);
// console.log(arr);

// const arr = [1, 2, 3];
// const lastEle = arr.pop();
// console.log(arr);
// console.log(lastEle);

// const arr = [1, 2, 3, 4];
// arr.splice(1, 2, 3, 4, 5, 6); // xoa tu pos(1) (2 pt) (them cac ptu sau)
// console.log(arr);

// const arr = [1, 2, 3, 4];
// const newArr = arr.slice(1, 3);
// console.log(newArr);

// const arr = [1, 2, 3, 4];
// console.log(arr.indexOf(5)); // -1

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// const newArr = arr1.concat(arr3, arr2);
// console.log(newArr);

// const arr = [1, 3, 4];
// console.log(arr.includes(3));

// const arr = ["apple", "banana", "cherry"];
// console.log(arr.join("-"));

// const arr = [1, 2, 3];
// console.log(arr.reverse());

// const arr = [4, 2, 3, 1, 333333, 55, 5524];
// const arr = ["a", "f", "c", "x", "i"];
// console.log(arr.sort().reverse());
// arr.sort(function (a, b) { return a > b });
// arr.sort((a, b) => a - b);
// console.log(arr);

// const arr = [1, 2, 3];
// console.log(arr.unshift(1, 2, 3)); //1
// console.log(arr); //[2, 3]

/////////////////////////////////////
//             OBJECT              //
/////////////////////////////////////

// const empty = {};

// const person = {
//     name: "John",
//     age: 30,
//     "isStudent": 10,
//     greet: function () {
//         console.log("Hl " + this.name);
//     }
// };

// person.greet();
// console.log(person);
// console.log(empty);

// console.log(person.name);
// console.log(person["isStudent"]);

// person.age = 100;
// person["isMan"] = true;
// console.log(person);

// const person = { name: "John" };
// const details = { age: 30, country: "USA" };
// const mergePerson = Object.assign({}, person, details); // mergePerson khoi tao la rong
// console.log(mergePerson);


// const hi = Object.keys(person);
// const ha = Object.values(person);
// const he = Object.entries(person);
// console.log(hi);
// console.log(ha);
// console.log(he);

const person = { name: "John", age: 30 };
console.log(person.hasOwnProperty("name"));  // TRUE - FALSE