import React from 'react';

interface ZoneProps {
    id: string;
    name: string;
    position: { x: number; y: number };
    onZoneClick: (id: string) => void;
}

const Zone: React.FC<ZoneProps> = ({ id, name, position, onZoneClick }) => {
    const handleClick = () => {
        onZoneClick(id);
    };

    return (
        <div
            className="zone"
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            <span>{name}</span>
        </div>
    );
};

export default Zone;