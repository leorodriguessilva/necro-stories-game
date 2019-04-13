class BasicObstacle extends CollidedObjectData {

    constructor(spriteName, obstacleStatsReader) {
        super();
        this.spriteName = spriteName;
        this.stats = obstacleStatsReader.generateStats(this.getName);
    }

    preload (loader) {
        super.preload(loader);
        loader.image(this.getName, 'assets/' + this.getName + '.png');
    }

    create (physics, obstacleCreationData, spriteBehaviourInitialization) {
        super.create(physics, {}, []);

        obstacleCreationData.key = this.getName;

        this.groupSprite = physics.add.group(obstacleCreationData);
    
        this.groupSprite.children.iterate(spriteBehaviourInitialization);
    }
    
    get getStats () {
        this.stats;
    }

    get getSprite() {
        return this.groupSprite;
    }

    get getName() {
        return this.spriteName;
    }

}