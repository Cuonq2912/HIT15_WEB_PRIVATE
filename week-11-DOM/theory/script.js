// const allTitles = document.getElementsByTagName("h1");
// const allTitles = document.getElementsByClassName("title");
// const allTitles = document.querySelectorAll(".title");
// const allTitles = document.querySelectorAll("h1");
// const allTitles = document.querySelector("#first-title");
/* Biến allTitles này là một HTMLCollections*/

// console.log(allTitles); //HTMLCollections
// console.log(allTitles.length); // Độ dài của HTMLCollections là 4

// allTitles[3].setAttribute("class", "setAttri");
// allTitles[3].setAttribute("id", "AllTit");

// allTitles[3].className = "setttri2";
// allTitles[3].id = "All";

// allTitles[3].classList.add("title", "header-title");
// allTitles[3].classList.remove("title", "header-title");

// allTitles[3].textContent = "qwertyu";


// for (let i = 0; i < allTitles.length; i++) {
// console.log(allTitles[i]);
// }


// ADDING STYLE

// const titles = document.querySelectorAll("h1");
// titles.forEach((title, i) => {
//     title.style.fontSize = "24px"; // all titles will have 24px font size
//     if (i % 2 === 0) {
//         title.style.color = "green";
//     } else {
//         title.style.color = "red";
//     }
// });
// const titles2 = document.querySelectorAll("h1");
// titles.forEach((title, i) => {
//     title.style.fontSize = "24px"; // all titles will have 24px font size
//     if (i % 2 === 0) {
//         title.style.backgroundColor = "green";
//     } else {
//         title.style.backgroundColor = "red";
//     }
// });


// MANIPULATE DOM

// CREATING AN ELEMENT
// let title = document.createElement("h1");
// title.className = "title";
// title.style.fontSize = "24px";
// title.textContent = "Creating HTML element DOM Day 2";

// console.log(title);

// let title2 = document.createElement("h2");
// title2.className = "title";
// title2.style.backgroundColor = "red";
// title2.textContent = "ádfghjk";

// console.log(title2);

// let title3;
// for (let i = 0; i < 10; i++) {
//     title3 = document.createElement("h1");
//     title3.className = "hi" + i;
//     title3.id = "haa";
//     if (i % 2) {
//         title3.style.fontSize = "20px";
//     }
//     else title3.styly.fontSize = "10px";
//     title3.textContent = "hiii";
//     console.log(title3);
// }



