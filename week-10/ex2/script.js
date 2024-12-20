let month = prompt("Input your month: ");
month = month.toLowerCase();
month = month.charAt(0).toUpperCase() + month.slice(1);
if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
    alert(`${month} has 31 days.`);
}
else if (month === "April" || month === "June" || month === "September" || month === "November") {
    alert(`${month} has 30 days.`);
}
else {
    alert(`${month} has 28 or 29 days.`);
}