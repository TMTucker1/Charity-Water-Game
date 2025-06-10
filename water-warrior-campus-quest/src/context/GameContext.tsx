import React, { createContext, useState } from "react";

export interface GameContextType {
  currentCampus: string | null;
  updateCampus: (campusId: string) => void;
  completedMissions: string[];
  completeMission: (missionId: string) => void;
  cleanWaterPoints: number;
  addItemToInventory: (item: string) => void;
  inventory: string[];
}

export const GameContext = createContext<GameContextType>({
  currentCampus: null,
  updateCampus: () => {},
  completedMissions: [],
  completeMission: () => {},
  cleanWaterPoints: 0,
  addItemToInventory: () => {},
  inventory: [],
});

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCampus, setCurrentCampus] = useState<string | null>(null);
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [cleanWaterPoints, setCleanWaterPoints] = useState<number>(0);
  const [inventory, setInventory] = useState<string[]>([]);

  const updateCampus = (campusId: string) => setCurrentCampus(campusId);
  const completeMission = (missionId: string) =>
    setCompletedMissions((prev) => [...prev, missionId]);
  const addItemToInventory = (item: string) =>
    setInventory((prev) => [...prev, item]);

  return (
    <GameContext.Provider
      value={{
        currentCampus,
        updateCampus,
        completedMissions,
        completeMission,
        cleanWaterPoints,
        addItemToInventory,
        inventory,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};