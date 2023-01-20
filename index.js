const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
// const navLink = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})


// navLink.addEventListener("click",  {
 //   hamburger.classList.toggle("active");
//navMenu.classList.toggle("closed");

//}) 