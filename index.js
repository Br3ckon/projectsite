const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
// const navLink = document.querySelector(".nav-menu")

const navitems = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {

   
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")


})



// navitem.addEventListener("click",  {
 //   hamburger.classList.toggle("active");
//navMenu.classList.toggle("closed");

//}) 

navitems.addEventListener("click", function() {
    navMenu.classList.toggle("active")



})