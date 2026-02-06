const buttons = document.querySelectorAll(".guide-menu button");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(button => {
    button.addEventListener('click', () => {
     const target = button.dataset.target;

     if (!target) return;

     tabs.forEach(tab => tab.classList.remove("active"));
     document.getElementById(target).classList.add("active");
    })
});      

const majorButtons = document.querySelectorAll("[data-submenu]");
const submenus = document.querySelectorAll(".tab-flex");

majorButtons.forEach(button => {    
    button.addEventListener('click', () => {
     const target = button.dataset.submenu;
     const subMenu1 = document.getElementById("div1");
     const subMenu2 = document.getElementById("div6");
     const subMenu3 = document.getElementById("div8");
     
    tabs.forEach(tab => tab.classList.remove("active"));

     if (target === "submenu1"){
            subMenu1.classList.add("active");
     } else if (target === "submenu2"){
            subMenu2.classList.add("active");
     } else if (target === "submenu3"){
            subMenu3.classList.add("active");
     }

     submenus.forEach(menu => menu.classList.remove("active"));
     document.getElementById(target)?.classList.add("active");
    })
});    