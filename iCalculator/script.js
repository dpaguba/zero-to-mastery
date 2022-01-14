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

function changeSign(){
    //Convert from string to array
    let list = Array.from(screen.innerText);
    //if positive -> add minus, else delete the first sign in array
    if (list[0] !== "-"){
        list.unshift("-");
    }else {
        list.shift();
    }
    //convert array to string with separator ""
    screen.innerHTML = list.join("");
}

function calculatePercent(){
    screen.innerHTML = String(Number(screen.innerText) / 100);
    changeSign();
}
