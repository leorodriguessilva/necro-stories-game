class CollidedObjectData {

    constructor (objectId) {
        if (objectId)
        {
            this.objectId = objectId;
            return;
        }
        this.objectId = Math.floor((Math.random() * 100) + 1);
    }

    preload (loader) {
        console.log('Loading ' + this.getGameObjectName + ' resources to be used');
    }

    create (physics, anims, collisionHandlers) {
        console.log('Creating ' + this.getGameObjectName + ' in the game context');
    }

    get getGameObjectName () {
        return this.getName + this.getObjectId;
    }

    get getObjectId () {
        return this.objectId;
    }

    get getName() {
        throw new NotImplementedException();
    }
    
    get getStats () {
        throw new NotImplementedException();
    }

    get getSprite() {
        throw new NotImplementedException();
    }
    
}