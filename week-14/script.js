// const multiply = (x, y) => {
//     return x * y;
// }

// console.log(multiply(3, 4));

// const phraseSplitterEs6 = (phrase) => phrase.split(" ");
// console.log(phraseSplitterEs6("Love Codelearn"));

// const hello = () => {
//     console.log("Hello World");
// };

// hello();

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     console.log("hiiiii");
// });

// Call back
// function myFunction(param) {
//     param("Khang");
// }

// function myCallback(name) {
//     console.log(`Hello ${name}`);
// }
// myFunction(myCallback);

const courses = [
    { id: 1, name: "Javascript", coin: 200, coinText: "hai tram" },
    { id: 2, name: "HTML, CSS", coin: 0 },
    { id: 3, name: "PHP", coin: 100 },
    { id: 4, name: "Angular", coin: 0 },
];

// courses.forEach(function (course, index) {
//     console.log(index, course);
// });

// callback
courses.forEach(function (course, index) {
    console.log(index, course);
});

// console.log(courses);

//every
var isFree = courses.every(function (course, index) {
    return course.coin === 0;
});

console.log(isFree)

//some
var isFree = courses.some(function (courses, index) {
    return courses.name = "Angular";
});

console.log(isFree);

//find
var course = courses.find(function (courses, index) {
    return courses.name === "Angular";
});

console.log(course);


//filter
var course = courses.filter(function (course, index) {
    return course.coin >= 100;
});

console.log(course);

//map
var newCourse = courses.map(function (course) {
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinText: course.coinText
    }
});
console.log(newCourse);
console.log(courses);

const number = [1, 2, 3, 4, 5];
const newNums = number.map(
    (course) => {
        return course * 2;
    }
)

console.log(newNums);

//reduce
let i = 0;
function callback(accumulator, currentValue) {
    i++;
    console.table({
        "Luot chay: ": i,
        "Lưu trữ: ": accumulator,
        "Giá tiền: ": currentValue.coin,
        "Tổng tiền: ": accumulator + currentValue.coin,
    });

    return accumulator + currentValue.coin;
}

const total = courses.reduce(callback, 0);

//Tinh tong
const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((arr, value) => {
    return arr * value;
}, 1);

console.log(sum);


// custom some
// const arr2 = [1, 3, 5, 7];

// function myCallBack(currentValue, index, originArray) {
//     return currentValue % 2 == 0;
// }

// function customSome(arr, myCallBack) {
//     for (let i = 0; i < arr.length; i++) {
//         if (myCallBack(arr[i], i, arr)) return true; // currValue, index, arr
//     }
//     return false;
// }

// const result = customSome(arr2, myCallBack);
// console.log(result);

// custom every
// const arr3 = [1, 3, 5, 7];

// function myCallBack(currentValue, index, originArray) {
//     return currentValue % 2 === 0;
// }

// function customEvery(arr, myCallBack) {
//     for (let i = 0; i < arr.length; i++) {
//         if (myCallBack(arr[i], i, arr)) return false;
//     }
//     return true;
// }

// const result2 = customEvery(arr3, myCallBack);
// console.log(result2);

// custom find 

// function myCallBack(currentValue, index, originArray) {
//     return currentValue > 4;
// }

// function customFind(arr4, myCallBack) {
//     for (let i = 0; i < arr4.length; i++) {
//         if (myCallBack(arr4[i], i, arr)) {
//             return arr4[i];
//         }
//     }
// }

// console.log(customFind(arr4, myCallBack));


// custom filter

// function myCallBack(currentValue, index, originArray) {
//     return currentValue > 4;
// }

// function customFilter(arr4, myCallBack) {
//     let values = [];
//     for (let i = 0; i < arr4.length; i++) {
//         if (myCallBack(arr4[i], i, arr4)) {
//             values.push(arr4[i]);
//         }
//     }
//     return values;
// }

// console.log(customFilter(arr4, myCallBack));


// custom map


// function myCallBack(currentValue, index, originArray) {
//     return currentValue * 2;
// }

// function customMap(arr4, index, originArray) {
//     let newArr = []
//     for (let i = 0; i < arr4.length; i++) {
//         newArr.push(myCallBack(arr4[i], i, arr4));
//     }
//     return newArr;
// }

// console.log(customMap(arr4, myCallBack));

// custom reduce

const arr4 = [1, 2, 3, 4, 5];


