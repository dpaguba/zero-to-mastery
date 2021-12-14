const symbols = ["🐊", "🦖", "🐥", "🦞", "🐢", "🦀", "🦧", "🐆", "🐬",
    "🐛", "🦋", "🐗", "🐐", "🦫", "🦜","🦔"];
const bars = document.querySelectorAll(".bar");


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
            if (bars[position].innerText === "🐾"){
                bars[position].innerHTML = symbols[i];
                count++;
            }
        }
    }
}
//fillBars();