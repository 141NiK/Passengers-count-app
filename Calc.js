let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

let subEl = document.getElementById("sub-el")

function sub() {
    let result = num1 - num2
    subEl.textContent = "Sub: " + result
}

let mulEl = document.getElementById("mul-el")

function mul() {
    let result = num1 * num2
    mulEl.textContent = "Mul: " + result
}

let divEl = document.getElementById("sum-el")

function div() {
    let result = num1 / num2
    divEl.textContent = "Div: " + result
}
 

