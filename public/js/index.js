const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu_btn = document.querySelector(".navbar_menu");

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const education = document.querySelector("#education");

// const home_top = home.getBoundingClientRect().height; // 높이를 구해서
// const about_top = about.getBoundingClientRect().height;
// const education_top = education.getBoundingClientRect().height;


// function menuHandler(e){
//     console.log(e.target.innerHTML);
//     console.log(home_top);
//     console.log(education_top);
// }


// menu_btn.addEventListener("click",menuHandler);




toggleBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
})

