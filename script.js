document.addEventListener('DOMContentLoaded', function () {
    // Initialize  map and set  view to a default location 
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Load and display tile layer on the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker;
    document.getElementById('coordinates-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var lat = parseFloat(document.getElementById('latitude').value);
        var lon = parseFloat(document.getElementById('longitude').value);

        if (!isNaN(lat) && !isNaN(lon)) {
            // Update the map view
            map.setView([lat, lon], 13);

            //Remove old marker
            if (marker) {
                map.removeLayer(marker);
            }

            // Add new marker
            marker = L.marker([lat, lon]).addTo(map);

            //Add popup
            marker.bindPopup(`<b>Coordinates:</b><br>Latitude: ${lat}<br>Longitude: ${lon}`).openPopup();
        } else {
            alert('Please enter valid coordinates.');
        }
    });
});