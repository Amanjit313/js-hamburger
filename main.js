const btnShow = document.querySelector(".fas.fa-bars");

const btnRemove = document.querySelector(".fas.fa-times");

const menu = document.querySelector(".hamburger-menu")

btnShow.addEventListener("click", function(){
  menu.classList.add("active")
})

btnRemove.addEventListener("click", function(){
  menu.classList.remove("active")
})
