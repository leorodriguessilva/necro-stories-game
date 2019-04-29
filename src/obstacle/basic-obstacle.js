var CollidedObjectData = require('../collider/CollidedObjectData');

class BasicObstacle extends CollidedObjectData {

    constructor(spriteName, obstacleStatsReader) {
        super();
        this.spriteName = spriteName;
        this.stats = obstacleStatsReader.generateStats(this.getName);
    }

    preload(loader) {
        super.preload(loader);
        loader.image(this.getName, 'assets/' + this.getName + '.png');
    }

    create(physics, obstacleCreationData, spriteBehaviourInitialization, collisionHandlers) {
        super.create(physics, {}, []);

        obstacleCreationData.key = this.getName;

        this.groupSprite = physics.add.group(obstacleCreationData);

        this.groupSprite.children.iterate(spriteBehaviourInitialization);

        collisionHandlers.forEach(collisionHandler => {
            collisionHandler.addColliderToHandle(this);
        });
    }

    get getStats() {
        return this.stats;
    }

    get getSprite() {
        return this.groupSprite;
    }

    get getName() {
        return this.spriteName;
    }

}

module.exports = BasicObstacle;