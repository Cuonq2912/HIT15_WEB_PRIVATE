const result = document.querySelector(".result");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    if (weight.value <= 0 || height.value <= 0) {
        result.textContent = "Nhập không hợp lệ. Vui lòng nhập lại";
        return;
    }
    let bmi = weight.value / (height.value * height.value);
    bmi = bmi.toFixed(2);
    if (bmi < 18.5) {
        result.textContent = `BMI: ${bmi}. Cơ thể bạn quá gầy.`;
        return;
    }
    else if (bmi < 24.9) {
        result.textContent = `BMI: ${bmi}. Cơ thể bạn đang rất khỏe mạnh.`;
        return;
    }
    else if (bmi < 29.9) {
        result.textContent = `BMI: ${bmi}. Bạn đang bị thừa cân.`;
        return;
    }
    else if (bmi < 34.9) {
        result.textContent = `BMI: ${bmi}. Bạn đang bị béo phì cấp độ I.`;
        return;
    }
    else if (bmi < 39.9) {
        result.textContent = `BMI: ${bmi}. Bạn đang bị béo phì cấp độ II.`;
        return;
    }
    else {
        result.textContent = `BMI: ${bmi}. Bạn đang bị béo phì cấp độ III.`;
        return;
    }

})
