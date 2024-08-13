// ======================== nav list ========================//
let open = document.querySelector (".nav-toggler");
let aside = document.querySelector (".aside");
let close = document.querySelector (".close");

open.addEventListener("click", function() {
    aside.classList.add("open");
    open.classList.add("dis");
});
close.addEventListener("click", function() {
    aside.classList.remove("open");
    open.classList.remove("dis");
});

// ======================== them light and dark mode ========================//
let dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
});

// ======================== color aside ========================//

let links = document.querySelectorAll (".cl-1");
let linkActive = document.querySelector ("#active"); 

links.forEach((li) => {
    li.addEventListener("click", (e) => {
        links.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});


// ======================== writing effect ========================//

let myJop = "Front End Developer" ;
let index = 1 ;

function writeText() {
    document.querySelector(".home-info .typing").textContent = myJop.slice(0 ,index);

    index++

    if (index > myJop.length) {
        index = 0;
    }
}

setInterval(function(){
    writeText();
},190)
