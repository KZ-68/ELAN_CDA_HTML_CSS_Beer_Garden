let servicesImagesWrapper = document.querySelectorAll(".services-images-wrapper");
let imagesBackground = document.querySelector(".services-images-background");

servicesImagesWrapper.forEach(serviceImageWrapper => {
    let layer = document.createElement('div');
    let addLayer = serviceImageWrapper.appendChild(layer);
    serviceImageWrapper.insertBefore(addLayer, serviceImageWrapper.firstChild);
    addLayer.style.backgroundColor = '#C89C5C';
    addLayer.style.width = '100%';
    addLayer.style.height = '100%';
    addLayer.style.zIndex = '1';
    addLayer.style.position = 'absolute';
    addLayer.style.top = '0';
    addLayer.style.display = 'none';

    serviceImageWrapper.addEventListener('mouseover', () => {
        layer.style.opacity = 0.5
        layer.style.display = 'block'
        serviceImageWrapper.lastElementChild.classList.add("zoomed")
        let plusThinIcon = serviceImageWrapper.querySelector("img[class=plus-thin]")
        plusThinIcon.style.display = "block"
    });

    serviceImageWrapper.addEventListener('mouseout', () => {
        layer.style.opacity = 0;
        layer.style.display = 'none'
        serviceImageWrapper.lastElementChild.classList.remove("zoomed")
        let plusThinIcon = serviceImageWrapper.querySelector("img[class=plus-thin]")
        plusThinIcon.style.display = "none"
    });
});
