let yourInput = prompt("Enter some number: ").split(",");
let myArr = [], minVal = 0, maxVal = 0, countEven = 0;

for (let i = 0; i < yourInput.length; i++) {
    if (i == 0) {
        minVal = yourInput[i];
        maxVal = yourInput[i];
        if (yourInput[i] % 2 == 0) {
            countEven++;
        }
    }
    else {
        if (yourInput[i] < minVal) {
            minVal = yourInput[i];
        }
        else if (yourInput[i] > maxVal) {
            maxVal = yourInput[i];
        }
        if (yourInput[i] % 2 == 0) {
            countEven++;
        }
    }
}
alert('Số lớn nhất: ' + maxVal + '\nSố nhỏ nhất: ' + minVal + '\nSố chẵn: ' + countEven);