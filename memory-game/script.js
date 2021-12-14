const symbols = ["🐊", "🦖", "🐥", "🦞", "🐢", "🦀", "🦧", "🐆", "🐬", "🐛", "🦋", "🐗", "🐐", "🦫", "🦜","🦔"];
const bars = document.querySelectorAll(".bar");

let cards = [];
let active = document.querySelectorAll(".active");

function initializeBars(){
    for (let i = 0; i < bars.length; i++) {
        cards.push("");
    }
}
initializeBars();

function fillBars(){
    let count = 0;
    let i = 0;

    while (i < symbols.length){
        if (count === 2){
            count = 0;
            i++;
        }else {
            let position = Math.floor(Math.random() * 32);
            if (cards[position] === ""){
                cards[position] = symbols[i];
                count++;
            }
        }
    }
}
fillBars();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// for (let i = 0; i < bars.length; i++) {
//
//     bars[i].addEventListener("click", ()=>{
//          bars[i].innerHTML = cards[i];
//          bars[i].classList.add("active");
         // play();
        // let active = document.querySelectorAll(".active");
        // if (active.length <= 1){
        //     bars[i].innerHTML = cards[i];
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
//     });
// }
//
// function stopGame(){
//     document.querySelector(".game-field").classList.add("no-event");
// }


// function play(){
//     let count = 0;
//
//     while (count < 15){
//         if (active.length === 2){
//             if (active[0].textContent === active[1].textContent){
//                 active[0].classList.add("matched");
//                 active[1].classList.add("matched");
//                 count++;
//             }else{
//                 active[0].innerHTML = "🐾";
//                 active[1].innerHTML = "🐾";
//             }
//             active[0].classList.remove("active");
//             active[1].classList.remove("active");
//         }
//     }
//
//     //stopGame();
//     alert("Game ended");
// }
// play();
// function play() {
//     let count = 0;
//
//     while (count < 10){
//          let active = document.querySelectorAll(".active");
//         if (active.length === 2) {
//             if (active[0].textContent === active[1].textContent) {
//                 count++;
//                 for (let j = 0; j < active.length; j++) {
//                     active[j].classList.remove("active");
//                 }
//             }else {
//                 for (let j = 0; j < active.length; j++) {
//                     active[j].classList.remove("active");
//                     active[j].innerHTML = "🐾";
//                 }
//             }
//         }
//     }
//
// }
// play();













////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Answer fot this task
// class MemoryGame {
//
//     constructor() {
//         this.duration = 1000;
//         this.cardsContainer = document.querySelector('.game-field');
//         this.cards = Array.from(this.cardsContainer.children);
//     }
//
//
//     shuffleCards() {
//         this.cards.forEach(card => {
//             const randomNumber = Math.floor(Math.random() * this.cards.length) + 1;
//
//             // card.classList.remove('has-match');
//
//             // setTimeout(() => {
//             //     card.style.order = `${randomNumber}`;
//             // }, 400);
//         })
//     }
//
//     checkAllCards() {
//         if (!this.cards.every(card => card.classList.contains('has-match'))) return;
//
//         setTimeout(() => {
//             this.shuffleCards();
//         }, this.duration);
//     }
//
//     stopEvent() {
//         this.cardsContainer.classList.add('no-event');
//
//         setTimeout(() => {
//             this.cardsContainer.classList.remove('no-event');
//         }, this.duration);
//     }
//
//     checkIfMatch([firstCard, secondCard]) {
//         if (firstCard.dataset.animal === secondCard.dataset.animal) {
//             firstCard.classList.remove('flipped');
//             secondCard.classList.remove('flipped');
//
//             firstCard.classList.add('has-match');
//             secondCard.classList.add('has-match');
//
//             this.checkAllCards();
//         }
//         else {
//             setTimeout(() => {
//                 firstCard.classList.remove('flipped');
//                 secondCard.classList.remove('flipped');
//             }, this.duration);
//         }
//     }
//
//     flip(selectedCard) {
//         selectedCard.classList.add('flipped');
//
//         const flippedCards = this.cards.filter(card => card.classList.contains('flipped'));
//         if (flippedCards.length === 2) {
//             this.stopEvent();
//             this.checkIfMatch(flippedCards);
//         }
//     }
//
// }
//
// const game = new MemoryGame;
//
// game.cards.forEach(card => {
//     card.addEventListener('click', game.flip.bind(game, card));
//})