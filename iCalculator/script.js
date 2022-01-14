console.log("This calculator was made by dpaguba");
let first = "";
let second = "";
let sign = "";

const screen = document.getElementById("result");
const numbers = document.querySelectorAll(".num");

function clearAll(){
    first = "";
    second = "";
    sign = "";
    screen.innerText = "0";
    changeSize();
}
