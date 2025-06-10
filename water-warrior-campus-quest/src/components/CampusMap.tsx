import React, { useContext, useEffect, useState } from 'react';
import { GameContext, GameContextType } from '../context/GameContext';
import useGameState from '../hooks/useGameState';
import Zone from './Zone';
import campusesData from '../data/campuses.json';
import './CampusMap.css';

type MissionType = "puzzle" | "quiz" | "story" | "npc";

interface CampusMapProps {
  campusId: string;
  onZoneClick: (missionId: string, type: MissionType) => void;
}

const CampusMap: React.FC<CampusMapProps> = ({ campusId, onZoneClick }) => {
    const { currentCampus, updateCampus } = useContext(GameContext) as GameContextType;
    interface CampusType {
      id: number;
      name: string;
      description: string;
      mapImage: string;
      missions: {
        id: number;
        type: string;
        description: string;
      }[];
      zones?: {
        id: number;
        // Add other zone properties if needed
        [key: string]: any;
      }[];
    }
    
    const [campusMap, setCampusMap] = useState<CampusType | null>(null);

    useEffect(() => {
        const campus = campusesData.find(
            campus => campus.id === (currentCampus ? Number(currentCampus) : undefined)
        );
        if (campus) {
            setCampusMap(campus);
        }
    }, [currentCampus]);

    if (!campusMap) {
        return <div>Loading...</div>;
    }

    return (
        <div className="campus-map">
            <img src={campusMap.mapImage} alt={campusMap.name} />
            {campusMap.zones?.map(zone => (
              <Zone
                key={zone.id}
                id={zone.id.toString()}
                name={zone.name}
                position={zone.position}
                onZoneClick={() => onZoneClick(zone.id.toString(), zone.type as MissionType)}
                // Add any other required props here
              />
            ))}
        </div>
    );
};

export default CampusMap;