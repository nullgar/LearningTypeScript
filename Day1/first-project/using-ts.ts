const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return Number(num1) + Number(num2);
}

button.addEventListener("click", function() {
  
  console.log(add(Number(input1.value), +input2.value));
});
