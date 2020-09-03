var navBtn = document.querySelector(".nav-box");
var navList = document.querySelector(".nav-list");
var lightBtn = document.querySelector(".light");
var darkBtn = document.querySelector(".dark");
var img1 = document.querySelector(".service-box .box1 img");
var img2 = document.querySelector(".service-box .box2 img");
var img3 = document.querySelector(".service-box .box3 img");

console.log(navBtn);
console.log(navList);

navBtn.addEventListener("click",function(){
    navList.classList.toggle("nav-toggle");
    
})

darkBtn.addEventListener("click",function(){
    document.documentElement.setAttribute("data-theme","dark");
    img1.setAttribute("src","image/undraw_code_thinking_1jeh (1).png")
    img2.setAttribute("src","image/undraw_code_typing_7jnv (1).png")
    img3.setAttribute("src","image/undraw_programming_2svr (1).png")
})

lightBtn.addEventListener("click",function(){
    document.documentElement.setAttribute("data-theme","light");
    img1.setAttribute("src","image/undraw_code_thinking_1jeh.png")
    img2.setAttribute("src","image/undraw_code_typing_7jnv.png")
    img3.setAttribute("src","image/undraw_programming_2svr.png")
})