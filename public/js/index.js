const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");

const home = document.querySelector(".home");
const about = documetn.querySelector(".about");
const education = document.querySelector(".education");
const skill = document.querySelector(".skill");
const project = document.querySelector(".project");


toggleBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
})

