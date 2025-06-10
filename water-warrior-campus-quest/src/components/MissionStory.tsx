import React from 'react';
import { Mission } from "../types"; // Make sure this includes content?: string

export interface MissionStoryProps {
  missionData: Mission;
  onComplete: () => void;
}

const MissionStory: React.FC<MissionStoryProps> = ({ missionData, onComplete }) => {
  return (
    <div className="mission-story">
      <div className="story-content">
        <h2>{missionData.title}</h2>
        <p>{missionData.content || missionData.description}</p>
      </div>
      <button className="close-button" onClick={onComplete}>
        Close
      </button>
    </div>
  );
};

export default MissionStory;