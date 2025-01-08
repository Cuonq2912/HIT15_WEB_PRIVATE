const width = document.querySelector("#width")
const height = document.querySelector("#height")
const padding = document.querySelector("#padding")
const margin = document.querySelector("#margin")
const bg = document.querySelector("#background")
const bgImage = document.querySelector("#background-image")
const color = document.querySelector("#color")
const content = document.querySelector("#content")

const draw = document.querySelector(".draw")
const reset = document.querySelector(".reset")
const output = document.querySelector(".output-container")

draw.addEventListener("click", function () {
    output.style.display = "block"
    output.style.width = `${width.value}`
    output.style.height = `${height.value}`
    output.style.padding = `${padding.value}`
    output.style.margin = `${margin.value}`
    output.style.backgroundColor = `${bg.value}`
    output.style.backgroundImage = `url(${bgImage.value})`
    output.style.color = `${color.value}`
    output.textContent = `${content.value}`
})

reset.addEventListener("click", reset)

function reset() {
    output.removeAttribute("style");
}