const button = document.querySelector("button")
const input = document.querySelector("input")
const spanCount = document.querySelectorAll("span")
const grid = document.querySelector(".grid-container")

function isPrime(n) {
    let primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes;
}


button.addEventListener("click", function () {
    let evenCount = 0, oddCount = 0, primeCount = 0;
    let n = input.value;

    if (n <= 0) {
        alert(`Nhập không hợp lệ!`)
        return
    }

    for (let i = 0; i < n; i++) {
        let div = document.createElement("div");
        div.textContent = i;
        let primes = isPrime(i);
        if (primes[i]) {
            div.style.backgroundColor = "#FD5E53";
            primeCount++;
        }
        else if (!(i % 2)) {
            div.style.backgroundColor = "#FDDB3A";
            evenCount++;
        }
        else {
            div.style.backgroundColor = "#79d7be";
            oddCount++;
        }

        grid.append(div);
    }
    spanCount[0].textContent = "Số chẵn: " + evenCount;
    spanCount[1].textContent = "Số lẻ: " + oddCount;
    spanCount[2].textContent = "Số nguyên tố: " + primeCount;
})
