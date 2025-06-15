class Mission {
    constructor(type, points) {
        this.type = type;
        this.points = points;
    }

    execute() {
        console.log(`Executing ${this.type} mission. Points earned: ${this.points}`);
        // Logic to start the mission can be implemented in subclasses
    }
}

export default Mission;