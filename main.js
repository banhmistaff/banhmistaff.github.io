/* ============================================== Navbar ============================================*/
let navbar = document.querySelector(".nav-container");
let logo = document.querySelector(".nav-left-side > img");

let viewportHeight = window.innerHeight; /* Get browser's height */
document.addEventListener('scroll', () => { /* Change navbar if scroll > height */
    let currentHeight = document.documentElement.scrollTop;
    if (currentHeight > viewportHeight) {
        navbar.classList.add("fixed-nav");
        logo.src = "./images/logo.png";
    }
    else {
        navbar.classList.remove("fixed-nav");
        logo.src = "./images/logo-white.png";
    }
})


let menu = document.getElementById("menu");
let close = document.getElementById("close");
let linkWrapper = document.querySelector(".link-wrapper");

menu.addEventListener('click', () => {
    menu.classList.toggle("hide");
    close.classList.toggle("hide");
    linkWrapper.classList.toggle("expand");

})
close.addEventListener('click', () => {
    menu.classList.toggle("hide");
    close.classList.toggle("hide");
    linkWrapper.classList.toggle("expand");
})



/* ============================================== Gallery ============================================*/
const imgArr = document.querySelector("#gallery");
const button = document.querySelector("#gallery .button");

function delayedLoad(index) {
    imgArr.children[index].classList.remove("hide");
}
function loadmore() { /* Load row of pictures when clicked */
    for (i = 4; i < 8; i++) {
        imgArr.children[i].classList.remove("hide");
    }
    button.classList.add("hide");
}
button.addEventListener('click', loadmore);


