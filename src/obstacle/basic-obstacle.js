class BasicObstacle extends CollidedObjectData {

    constructor(locationX, locationY, obstacleStatsReader) {
        this.locationX = locationX;
        this.locationY = locationY;
        this.stats = obstacleStatsReader.generateStats(this.getName);
        this.inputHandlers = inputHandlers;
        this.collisionHandlers = collisionHandlers;
    }

}