var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return Number(num1) + Number(num2);
}
button.addEventListener("click", function () {
    console.log(add(Number(input1.value), +input2.value));
});
