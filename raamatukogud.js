function initMap() {
    // Create a map centered at a default location
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 }, // Default coordinates
        zoom: 15,
    });

    // Create a Places service
    const service = new google.maps.places.PlacesService(map);

    // Get the user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            map.setCenter(userLocation);

            // Search for libraries near the user's location
            const request = {
                location: userLocation,
                radius: '500', // Search within 500 meters
                type: ['library'],
            };

            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (let i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                }
            });
        });
    }

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
        });

        const infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', () => {
            infowindow.setContent(place.name);
            infowindow.open(map, marker);
        });
    }
}

// Initialize the map
google.maps.event.addDomListener(window, 'load', initMap);
