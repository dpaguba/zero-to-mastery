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

function addDot(){
    screen.innerHTML = (screen.innerText[screen.innerText.length - 1] !== "." && !includeDot()) ? screen.innerHTML += "." : screen.innerHTML;
    changeSize();
}

function includeDot(){
    return screen.innerText.includes(".");
}

function addNumber(event){
    let value = event.target.innerText;
    if (first.length < 7){
        if (sign === ""){
            if (value.length === 1 && screen.innerText === "0"){
                first = value;
                screen.innerHTML = value;
            }else {
                first += value;
                screen.innerHTML += value;
            }
        }else {
            if (second === ""){
                screen.innerHTML = "";
                changeSecond(value);
            }else{
                changeSecond(value);
            }

        }
        changeSize();
    }else if (first.length >= 7 && second.length < 7){
        if (sign !== ""){
            if (second === ""){
                screen.innerHTML = "";
                changeSize();
                changeSecond(value);
            }else{
                changeSecond(value);
            }
        }
    }else if (first.length === 7 && second.length === 7){
        if (sign !== ""){
            calc();
        }
    }
}

function changeSecond(value){
    if (value.length === 1 && screen.innerText === "0"){
        second = value;
        screen.innerHTML = value;
    }else {
        second += value;
        screen.innerHTML += value;
    }
}

function divide(){
    if (sign === ""){
        first = screen.innerText;
        sign = "/";
    }else if (sign === "/"){
        calc();
    } else{
        sign = "/";
    }
}

function multiply(){
    if (sign === ""){
        first = screen.innerText;
        sign = "*";
    }else if (sign === "*"){
        calc();
    } else{
        sign = "*";
    }
}

function subtract(){
    if (sign === ""){
        first = screen.innerText;
        sign = "-";
    }else if (sign === "-"){
        calc();
    } else{
        sign = "-";
    }
}

function add(){
    if (sign === ""){
        first = screen.innerText;
        sign = "+";
    }else if (sign === "+"){
        calc();
    } else{
        sign = "+";
    }
}

function calc(){
    switch (sign){
        case "/":
            if (second === "0"){
                alert("Division by 0 is impossible!");
                clearAll();
                break;
            }else{
                screen.innerHTML = String((+first) / (+second));
                break;
            }
        case "*":
            screen.innerHTML = String((+first) * (+second));
            break;
        case "-":
            screen.innerHTML = String((+first) - (+second));
            break;
        case "+":
            screen.innerHTML = String((+first) + (+second));
            break;
        default:
            alert("ERROR: Try it again!");
    }

    first = screen.innerText;
    second = "";
    changeSize();
}
