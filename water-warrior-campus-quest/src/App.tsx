import React, { useState } from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import CampusMap from "./components/CampusMap";
import MissionPuzzle from "./components/MissionPuzzle";
import MissionQuiz from "./components/MissionQuiz";
import MissionStory from "./components/MissionStory";
import MissionNPC from "./components/MissionNPC";
import RewardsStore from "./components/RewardsStore";
import Inventory from "./components/Inventory";
import HUD from "./components/HUD";
import campuses from "./data/campuses.json";
import missions from "./data/missions.json";
import useGameState from "./hooks/useGameState";
import "./styles/main.css";

type MissionType = "puzzle" | "quiz" | "story" | "npc";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentCampus, setCurrentCampus] = useState<string | null>(null);
  const [activeMission, setActiveMission] = useState<null | { id: string; type: MissionType }>(null);
  const [showRewards, setShowRewards] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const { cleanWaterPoints } = useGameState();

  // Splash screen timeout
  React.useEffect(() => {
    if (showSplash) {
      setTimeout(() => setShowSplash(false), 1500);
    }
  }, [showSplash]);

  if (showSplash) return <SplashScreen />;
  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  // Campus selection
  if (!currentCampus) {
    return (
      <div className="campus-select">
        <h2>Select a Campus</h2>
        <ul>
          {campuses.map((campus: any) => (
            <li key={campus.id}>
              <button onClick={() => setCurrentCampus(campus.id)}>{campus.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Mission launching
  if (activeMission) {
    const mission = missions.find((m: any) => m.id === activeMission.id);
    if (!mission) return null;
    switch (activeMission.type) {
      case "puzzle":
        return <MissionPuzzle missionData={mission} onComplete={() => setActiveMission(null)} />;
      case "quiz":
        return (
          <MissionQuiz
            questions={mission.questions ?? []}
            onComplete={() => setActiveMission(null)}
          />
        );
      case "story":
        return <MissionStory mission={mission} onComplete={() => setActiveMission(null)} />;
      case "npc":
        return <MissionNPC missionData={mission} onComplete={() => setActiveMission(null)} />;
      default:
        return null;
    }
  }

  // Main campus map screen
  return (
    <Router>
      <div className="app">
        <HUD
          cwp={cleanWaterPoints}
          onMissionAccess={() => {}}
          onSettings={() => {}}
        />
        <CampusMap
          campusId={currentCampus}
          onZoneClick={(missionId: string, type: MissionType) =>
            setActiveMission({ id: missionId, type })
          }
        />
        {showRewards && <RewardsStore onClose={() => setShowRewards(false)} />}
        {showInventory && <Inventory onClose={() => setShowInventory(false)} />}
      </div>
    </Router>
  );
};

export default App;