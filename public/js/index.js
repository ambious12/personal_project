const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu_btn = document.querySelector(".navbar_menu");

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const education = document.querySelector("#education");


toggleBtn.addEventListener("click",()=>{
    menu_btn.classList.toggle("active");
})

