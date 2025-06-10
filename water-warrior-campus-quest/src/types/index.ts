export interface Campus {
    id: string;
    name: string;
    description: string;
    image: string;
    missions: Mission[];
}

export interface Mission {
    id: string;
    type: 'puzzle' | 'quiz' | 'story' | 'npc';
    title: string;
    description: string;
    completed: boolean;
    rewardCWP: number;
}

export interface Reward {
    cost: ReactNode;
    id: string;
    name: string;
    description: string;
    costCWP: number;
}

export interface Item {
    id: string;
    name: string;
    description: string;
    collectible: boolean;
}

export interface GameState {
    currentCampus: Campus | null;
    completedMissions: string[];
    cwpBalance: number;
    inventory: Item[];
    rewardsRedeemed: string[];
}