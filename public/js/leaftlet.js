let coordinateY = 48.54;
let coordinateX = 7.77;
let coordinateZ = 15;

let coordinatesZAndX = [coordinateY, coordinateX];

var map = L.map('map').setView(coordinatesZAndX, coordinateZ);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker(coordinatesZAndX).addTo(map)