export const calculateCWP = (missionsCompleted: number): number => {
    return missionsCompleted * 10; // Example: 10 CWP per completed mission
};

export const getRandomItem = (items: string[]): string => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};

export const formatMissionTitle = (title: string): string => {
    return title.charAt(0).toUpperCase() + title.slice(1);
};

export const isMissionCompleted = (completedMissions: string[], missionId: string): boolean => {
    return completedMissions.includes(missionId);
};

export const getUniqueItems = (items: string[]): string[] => {
    return [...new Set(items)];
};

export async function fetchRewards() {
  // Replace this with your actual API call or data fetching logic
  return [
    {
      id: "1",
      name: "Discount Coupon",
      description: "Get a discount at the campus store.",
      cost: 100,
      costCWP: 100,
    },
    {
      id: "2",
      name: "Water Bottle",
      description: "Reusable branded water bottle.",
      cost: 200,
      costCWP: 200,
    },
    {
      id: "3",
      name: "Event Ticket",
      description: "Entry to a special campus event.",
      cost: 300,
      costCWP: 300,
    },
  ];
}