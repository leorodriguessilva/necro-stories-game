var BasicColisionHandler = require('./basic-colision-handler');

class PhysicalHarmColisionHandler extends BasicColisionHandler {

    handle(ownerCollidedObjectData, triggerCollidedObjectData) {
        super.handle(ownerCollidedObjectData, triggerCollidedObjectData);
        this.character.harm();
    }

}

module.exports = PhysicalHarmColisionHandler;