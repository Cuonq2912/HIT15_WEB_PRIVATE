let userInput = prompt("Enter day in a week: ");
let day = userInput.toLowerCase();
day = day.charAt(0).toUpperCase() + day.slice(1);

if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
    alert(`${day} is a working day.`);
}
else if (day === "Saturday" || day === "Sunday") {
    alert(`${day} is a weekend.`);
}
else {
    alert(`Not a valid day.`);
}