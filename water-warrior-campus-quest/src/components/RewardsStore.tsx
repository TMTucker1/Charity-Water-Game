import React, { useState, useEffect } from "react";
import { Reward } from "../types";
import { fetchRewards } from "../utils/helpers";

interface RewardsStoreProps {
  onClose: () => void;
}

const RewardsStore: React.FC<RewardsStoreProps> = ({ onClose }) => {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [cwpBalance, setCwpBalance] = useState<number>(0);

  useEffect(() => {
    const loadRewards = async () => {
      const rewardsData = await fetchRewards();
      setRewards(rewardsData);
    };

    loadRewards();
  }, []);

  const handleRedeem = (rewardId: string) => {
    // Logic to redeem the reward
    // Update CWP balance and mark reward as redeemed
  };

  return (
    <div className="rewards-store">
      <h2>Rewards Store</h2>
      <p>Your Clean Water Points (CWP): {cwpBalance}</p>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>
            <span>
              {reward.name} - {reward.cost} CWP
            </span>
            <button onClick={() => handleRedeem(reward.id)}>Redeem</button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RewardsStore;