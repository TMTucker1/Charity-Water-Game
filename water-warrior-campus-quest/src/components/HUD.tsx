import React from 'react';

const HUD: React.FC<{ cwp: number; onMissionAccess: () => void; onSettings: () => void; }> = ({ cwp, onMissionAccess, onSettings }) => {
    return (
        <div className="hud">
            <div className="cwp-counter">
                Clean Water Points: {cwp}
            </div>
            <div className="hud-buttons">
                <button onClick={onMissionAccess}>Missions</button>
                <button onClick={onSettings}>Settings</button>
            </div>
        </div>
    );
};

export default HUD;