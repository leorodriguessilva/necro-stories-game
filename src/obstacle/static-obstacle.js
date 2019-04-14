class StaticObstacle extends CollidedObjectData {

    constructor(spriteName) {
        super();
        this.spriteName = spriteName;
    }

    preload (loader) {
        super.preload(loader);
        loader.image(this.getName, 'assets/' + this.getName + '.png');
    }

    create (physics, staticGroupSpriteInitialization) {
        super.create(physics, {}, []);

        this.staticGroupSprite = physics.add.staticGroup();

        staticGroupSpriteInitialization(this.staticGroupSprite);
    }
    
    get getStats () {
        return {};
    }

    get getSprite() {
        return this.staticGroupSprite;
    }

    get getName() {
        return this.spriteName;
    }

}