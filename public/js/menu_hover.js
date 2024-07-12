let menuItems = document.querySelectorAll(".menu-items");


menuItems.forEach(menuItem => {
    let menuIcon = menuItem.querySelector("[class='menu-icons']");
    let menuHeading = menuItem.querySelector("[class='menu-heading']");
    
    menuIcon.addEventListener("mouseover", () => {
        menuHeading.classList.add("menu-heading-hovered")
    })
    menuIcon.addEventListener("mouseout", () => {
        menuHeading.classList.remove("menu-heading-hovered")
    })
    
})

