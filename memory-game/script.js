const symbols = ["🐊", "🦖", "🐥", "🦞", "🐢", "🦀", "🦧", "🐆", "🐬", "🐛", "🦋", "🐗", "🐐", "🦫", "🦜","🦔"];
const bars = document.querySelectorAll(".bar");

let barsWithSymbol = [];

function initializeBars(){
    for (let i = 0; i < bars.length; i++) {
        barsWithSymbol.push("");
    }
}
initializeBars();

function generateNum(){
    return Math.floor(Math.random() * 32);
}

function fillBars(){
    let count = 0;
    let i = 0;

    while (i < symbols.length){
        if (count === 2){
            count = 0;
            i++;
        }else {
            let position = generateNum();
            if (barsWithSymbol[position] === ""){
                barsWithSymbol[position] = symbols[i];
                count++;
            }
        }
    }
}

fillBars();

function makeActive(i){
    let active = document.querySelectorAll(".active");
        if (active.length <= 1){
            bars[i].innerHTML = barsWithSymbol[i];
        }else if (active.length === 2){
            if (active[0] === active[1]){
                for (let j = 0; j < active.length; j++) {
                    active[i].disabled = true;
                }
            }else {
                bars[i].innerHTML = "🐾";
            }
        }
}


for (let i = 0; i < bars.length; i++) {

    // bars[i].addEventListener("click", ()=>{
    //     let active = document.querySelectorAll(".active");
    //     if (+active <= 0){
    //         bars[i].innerHTML = barsWithSymbol[i];
    //     }else if (+active === 2){
    //         if (active[0] === active[1]){
    //             for (let j = 0; j < active.length; j++) {
    //                 active[j].removeEventListener("click");
    //             }
    //         }else {
    //
    //         }
    //     }else {
    //
    //     }
    // });

    bars[i].addEventListener("click", makeActive);
}


