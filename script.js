document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map and set its view to a chosen geographical coordinates and zoom level
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Load and display tile layer on the map (OpenStreetMap tiles)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    var marker = L.marker([51.505, -0.09]).addTo(map);

    // Add a popup to the marker
    marker.bindPopup("<b>Popup!</b>").openPopup();
});