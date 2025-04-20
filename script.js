const busRoutes = [
    { 
        route: 1, 
        from: "Railway Station", 
        to: "Bhatti Chowk", 
        busType: "Standard", 
        alignment: ["Railway Station", "Ek Moriya", "Nawaz Sharif Hospital", "Kashmiri Gate", "Lari Adda", "Azadi Chowk", "Texali Chowk", "Bhatti Chowk"]
    },
    { 
        route: 2, 
        from: "Samanabad Mor", 
        to: "Bhatti Chowk", 
        busType: "Standard", 
        alignment: ["Samanabad Morr", "Corporation Chowk", "Taj Company", "Sanda", "Double Sarkan", "Moon Market", "Ganda Nala", "Bhatti Chowk"]
    },
    { 
        route: 3, 
        from: "Railway Station", 
        to: "Shahdara Lari Adda", 
        busType: "Standard", 
        alignment: ["Railway Station", "Ek Moriya", "Nawaz Sharif Hospital", "Kashmiri Gate", "Lari Adda", "Azadi Chowk", "Timber Market", "METRO", "Niazi Chowk", "Shahdara Metro Station", "Shahdara Lari Adda"]
    },
    
];

function findBusRoute(startLocation, endLocation) {
    const route = busRoutes.find(bus => 
        bus.from.toLowerCase() === startLocation.toLowerCase() && 
        bus.to.toLowerCase() === endLocation.toLowerCase()
    );
    
    if (route) {
        return `Bus Route No: ${route.route}\nType: ${route.busType} Bus\nStops: ${route.alignment.join(" -> ")}`;
    } else {
        return "No bus route found for the given locations.";
    }
}

// Handle form submission
document.getElementById("routeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const startLocation = document.getElementById("startLocation").value;
    const endLocation = document.getElementById("endLocation").value;

    // Find and display the bus route
    const result = findBusRoute(startLocation, endLocation);
    document.getElementById("result").innerText = result;
});
