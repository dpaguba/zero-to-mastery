const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/*
------------------------------------------------------------------------------
Andere Moeglichkeit das Problem zu loesen:

const panels = document.querySelectorAll(".panel");
let currentActive = document.querySelector(".active");

function checkClick(){
    for (let position = 0; position < panels.length; position++){
        panels[position].onclick = changeActivePanel;
    }
}

function changeActivePanel(event){
    currentActive.classList.remove("active");
    event.target.classList.add("active");
    currentActive = event.target;
}

panels.forEach((panel) =>{
    panel.addEventListener("click", checkClick);
})
 */
