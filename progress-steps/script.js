const line = document.querySelector(".progress-line");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

function goNext(){
    if (++currentActive <= circles.length){
        circles[currentActive - 1].classList.add("active");
        line.style.width = calculatePercentage();
        checkActiveState();
    }
}

function goPrev(){
    if (--currentActive >= 1){
        circles[currentActive].classList.remove("active");
        line.style.width = calculatePercentage();
        checkActiveState();
    }
}

function calculatePercentage(){
    return ((currentActive - 1) * 33) + "%"
}

function checkActiveState(){
    prev.disabled = currentActive <= 1;
    next.disabled = currentActive === circles.length;
}


next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);


//---------------------------------------------------------------------
// Another way to make this functionality:
// next.addEventListener('click', () => {
//     currentActive++
//
//     if(currentActive > circles.length) {
//         currentActive = circles.length
//     }
//
//     update()
// })
//
// prev.addEventListener('click', () => {
//     currentActive--
//
//     if(currentActive < 1) {
//         currentActive = 1
//     }
//
//     update()
// })
//
// function update() {
//     circles.forEach((circle, idx) => {
//         if(idx < currentActive) {
//             circle.classList.add('active')
//         } else {
//             circle.classList.remove('active')
//         }
//     })
//
//     const actives = document.querySelectorAll('.active')
//
//     line.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
//
//     if(currentActive === 1) {
//         prev.disabled = true
//     } else if(currentActive === circles.length) {
//         next.disabled = true
//     } else {
//         prev.disabled = false
//         next.disabled = false
//     }
// }