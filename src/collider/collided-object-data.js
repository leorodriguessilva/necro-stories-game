class CollidedObjectData {

    preload (loader) {
        console.log('Loading ' + this.getName + ' resources to be used');
    }

    create (physics, anims, collisionHandlers) {
        console.log('Creating ' + this.getName + ' in the game context');
    }
    
    get getStats () {
        throw new NotImplementedException();
    }

    get getSprite() {
        throw new NotImplementedException();
    }

    get getName() {
        throw new NotImplementedException();
    }
    
}