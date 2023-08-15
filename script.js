let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
menu.addEventListener("click" , ()=>{
  menu.classList.toggle("open");
  sidebar.classList.toggle("scale");
})