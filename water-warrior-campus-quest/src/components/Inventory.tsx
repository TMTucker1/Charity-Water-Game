import React from 'react';

interface InventoryProps {
  onClose: () => void;
}

const Inventory: React.FC<InventoryProps> = ({ onClose }) => {
  const [items, setItems] = React.useState<string[]>([]);

  // Function to fetch items from the game state or API
  const fetchItems = () => {
      // Placeholder for fetching items logic
      const fetchedItems = ['Water Bottle', 'Filter', 'Map']; // Example items
      setItems(fetchedItems);
  };

  React.useEffect(() => {
      fetchItems();
  }, []);

  return (
      <div className="inventory">
          <h2>Your Inventory</h2>
          <ul>
              {items.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
          </ul>
          <button onClick={onClose}>Close</button>
      </div>
  );
};

export default Inventory;