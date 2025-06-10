import React, { useState } from 'react';

interface NPC {
    name: string;
    dialogue: string[];
    quest: string;
}

const MissionNPC: React.FC<{ npc: NPC; onQuestComplete: () => void }> = ({ npc, onQuestComplete }) => {
    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
    const [questAccepted, setQuestAccepted] = useState(false);

    const handleNextDialogue = () => {
        if (currentDialogueIndex < npc.dialogue.length - 1) {
            setCurrentDialogueIndex(currentDialogueIndex + 1);
        } else {
            setQuestAccepted(true);
        }
    };

    const handleQuestCompletion = () => {
        onQuestComplete();
        setQuestAccepted(false);
        setCurrentDialogueIndex(0);
    };

    return (
        <div className="npc-interaction">
            <h2>{npc.name}</h2>
            <p>{questAccepted ? "Quest Accepted!" : npc.dialogue[currentDialogueIndex]}</p>
            {!questAccepted ? (
                <button onClick={handleNextDialogue}>
                    {currentDialogueIndex < npc.dialogue.length - 1 ? "Next" : "Accept Quest"}
                </button>
            ) : (
                <button onClick={handleQuestCompletion}>Complete Quest</button>
            )}
        </div>
    );
};

export default MissionNPC;