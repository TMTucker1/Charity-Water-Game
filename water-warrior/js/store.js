// This file manages the in-game store functionality, allowing players to spend points earned from missions on real-world items. 
// It includes methods to display store items and handle purchases.

class Store {
    constructor(items) {
        this.items = items;
        this.playerPoints = 0;
    }

    displayItems() {
        const storeContainer = document.getElementById('store-items');
        storeContainer.innerHTML = '';

        this.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'store-item';
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: ${item.price} points</p>
                <button onclick="store.purchaseItem('${item.name}', ${item.price})">Purchase</button>
            `;
            storeContainer.appendChild(itemDiv);
        });
    }

    purchaseItem(itemName, itemPrice) {
        if (this.playerPoints >= itemPrice) {
            this.playerPoints -= itemPrice;
            alert(`You have purchased ${itemName}!`);
            this.updatePointsDisplay();
        } else {
            alert('Not enough points to purchase this item.');
        }
    }

    updatePointsDisplay() {
        const pointsDisplay = document.getElementById('points-display');
        pointsDisplay.innerText = `Points: ${this.playerPoints}`;
    }

    addPoints(points) {
        this.playerPoints += points;
        this.updatePointsDisplay();
    }
}

// Example of how to initialize the store with items
const storeItems = [
    { name: 'Water Bottle', price: 10, description: 'Stay hydrated!' },
    { name: 'T-Shirt', price: 20, description: 'Show your Water Warrior spirit!' },
    { name: 'Sticker Pack', price: 5, description: 'Decorate your belongings!' }
];

const store = new Store(storeItems);
store.displayItems();