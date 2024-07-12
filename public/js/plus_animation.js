let servicesImagesWrapper = document.querySelectorAll(".services-images-wrapper");
let imagesBackground = document.querySelector(".services-images-background");

servicesImagesWrapper.forEach(serviceImageWrapper => {
    let layer = document.createElement('div');
    let addLayer = serviceImageWrapper.appendChild(layer);
    serviceImageWrapper.insertBefore(addLayer, serviceImageWrapper.firstChild);
    layer.style.backgroundColor = '#C89C5C';
    layer.style.width = '100%';
    layer.style.height = '100%';
    layer.style.zIndex = '1';
    layer.style.position = 'absolute';
    layer.style.top = '0';
    layer.style.display = 'none';
    layer.classList.add(".smooth-transition");

    serviceImageWrapper.addEventListener('mouseover', () => {
        layer.style.opacity = 0.5
        layer.style.display = 'block'
        serviceImageWrapper.lastElementChild.classList.add("zoomed")
        let plusThinIcon = serviceImageWrapper.querySelector("img[class='plus-thin']")
        plusThinIcon.style.visibility = "visible"
        plusThinIcon.classList.add("rotating-clockwise")
    });

    serviceImageWrapper.addEventListener('mouseout', () => {
        layer.style.opacity = 0;
        layer.style.display = "none"
        serviceImageWrapper.lastElementChild.classList.remove("zoomed")
        let plusThinIcon = serviceImageWrapper.querySelector("img[class='plus-thin rotating-clockwise']")
        plusThinIcon.classList.remove("rotating-clockwise")
        plusThinIcon.style.visibility = "hidden"
    });
});
