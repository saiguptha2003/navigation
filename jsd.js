function findRoutes(source,destination) {

    // Replace 'YOUR_MAPQUEST_API_KEY' with your actual API key
    var apiKey = 'h3oe5LqPVXR19d80onjBG9E76iHNH4IN';

    // Construct the API request URL
    var apiUrl = `https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${source}&to=${destination}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.route && data.route.legs.length > 0) {
                // Extract and display route information
                var routeInfo = data.route.legs[0].maneuvers.map(maneuver => maneuver.narrative);
                displayRoutes(routeInfo);
            } else {
                console.log('No routes found.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            console.log('Error fetching routes.');
        });
}

function displayRoutes(routes) {
    console.log('Route Information:');
    if (routes.length > 0) {
        routes.forEach(route => {
            console.log(route);
        });
    } else {
        console.log('No routes found.');
    }
}
findRoutes('Panaji', 'Margao');