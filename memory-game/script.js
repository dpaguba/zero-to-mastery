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

for (let i = 0; i < bars.length; i++) {

    bars[i].addEventListener("click", ()=>{
        bars[i].innerHTML = barsWithSymbol[i];
        bars[i].classList.add("active");
        // let active = document.querySelectorAll(".active");
        // if (active.length <= 1){
        //     bars[i].innerHTML = barsWithSymbol[i];
        //     bars[i].classList.add("active");
        //     if (active.length === 2) {
        //         console.log(active);
        //         if (active[0].textContent === active[1].textContent) {
        //             for (let j = 0; j < active.length; j++) {
        //                 active[j].classList.remove("active");
        //             }
        //         } else {
        //             bars[i].innerHTML = "🐾";
        //         }
        //     }
        // }
    });
}

function play() {
    let count = 0;

    while (count < 10){
        let active = document.querySelectorAll(".active");

        if (active.length === 2) {
            if (active[0].textContent === active[1].textContent) {
                count++;
                for (let j = 0; j < active.length; j++) {
                    active[j].classList.remove("active");
                }
            }else {
                for (let j = 0; j < active.length; j++) {
                    active[j].classList.remove("active");
                    active[j].innerHTML = "🐾";
                }
            }
        }
    }

}
play();