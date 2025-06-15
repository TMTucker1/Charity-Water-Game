function initializeMap() {
    const map = {
        locations: {
            dormRooms: { name: "Dorm Rooms", missions: [] },
            library: { name: "Library", missions: ["trivia"] },
            cafeteria: { name: "Cafeteria", missions: ["logicPuzzle"] },
            gym: { name: "Gym", missions: ["whackWaterDrop"] },
        },
        paths: [
            { from: "dormRooms", to: "library" },
            { from: "library", to: "cafeteria" },
            { from: "cafeteria", to: "gym" },
        ],
    };

    let currentLocation = "dormRooms";

    function updateDisplay() {
        const location = map.locations[currentLocation];
        document.getElementById("location-name").innerText = location.name;
        document.getElementById("missions").innerHTML = location.missions.map(mission => 
            `<button onclick="startMission('${mission}')">${mission}</button>`
        ).join('');
    }

    function moveTo(location) {
        if (map.paths.some(path => path.from === currentLocation && path.to === location)) {
            currentLocation = location;
            updateDisplay();
        } else {
            alert("You can't go that way!");
        }
    }

    document.getElementById("move-library").addEventListener("click", () => moveTo("library"));
    document.getElementById("move-cafeteria").addEventListener("click", () => moveTo("cafeteria"));
    document.getElementById("move-gym").addEventListener("click", () => moveTo("gym"));

    updateDisplay();
}

export { initializeMap };