import { useState, useEffect } from 'react';

const useGameState = () => {
    const [currentCampus, setCurrentCampus] = useState(null);
    const [completedMissions, setCompletedMissions] = useState([]);
    const [cleanWaterPoints, setCleanWaterPoints] = useState(0);
    const [inventory, setInventory] = useState([]);
    
    useEffect(() => {
        // Load initial state from local storage or set defaults
        const savedCampus = localStorage.getItem('currentCampus');
        const savedMissions = JSON.parse(localStorage.getItem('completedMissions')) || [];
        const savedCWP = parseInt(localStorage.getItem('cleanWaterPoints')) || 0;
        const savedInventory = JSON.parse(localStorage.getItem('inventory')) || [];

        if (savedCampus) {
            setCurrentCampus(savedCampus);
        }
        setCompletedMissions(savedMissions);
        setCleanWaterPoints(savedCWP);
        setInventory(savedInventory);
    }, []);

    const updateCampus = (campus) => {
        setCurrentCampus(campus);
        localStorage.setItem('currentCampus', campus);
    };

    const completeMission = (missionId) => {
        if (!completedMissions.includes(missionId)) {
            setCompletedMissions(prev => [...prev, missionId]);
            setCleanWaterPoints(prev => prev + 10); // Example CWP reward
            localStorage.setItem('completedMissions', JSON.stringify([...completedMissions, missionId]));
            localStorage.setItem('cleanWaterPoints', cleanWaterPoints + 10);
        }
    };

    const addItemToInventory = (item) => {
        setInventory(prev => [...prev, item]);
        localStorage.setItem('inventory', JSON.stringify([...inventory, item]));
    };

    return {
        currentCampus,
        completedMissions,
        cleanWaterPoints,
        inventory,
        updateCampus,
        completeMission,
        addItemToInventory,
    };
};

export default useGameState;