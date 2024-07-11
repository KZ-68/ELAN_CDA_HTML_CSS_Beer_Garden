let menuIcons = document.querySelectorAll(".menu-icons");

menuIcons.forEach(menuIcon => {
    menuIcon.addEventListener("mouseover", () => {
        menuIcon.classList.add('hovered');
    })
    menuIcon.addEventListener("mouseout", () => {
        menuIcon.classList.remove('hovered');
    })
})