// Crear el mapa
var map = L.map('map').setView([22.1565, -100.9855], 13);

// Agregar el mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Agregar un marcador en San Luis Potosí
var marker = L.marker([22.1565, -100.9855]).addTo(map);

// Agregar una etiqueta al marcador
marker.bindPopup("<b>Residencia</b>").openPopup();
