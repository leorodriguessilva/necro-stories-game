var NotImplementedException = require('../common/exception/not-implemented-exception');

class ColisionHandler {

    constructor(physics, colliderWrapper) {
        this.physics = physics;
        this.colliderWrapper = colliderWrapper;
        this.isOn = true;
    }

    handle(ownerCollidedObjectData, triggerCollidedObjectData) {
        this.colliderWrapper.invokeColisionBetweenObjects(
            this.character,
            triggerCollidedObjectData,
            this.colliderWrapper.getCollidedObjectData);
    }

    addColliderToHandle(ownerCollidedObjectData) {
        throw new NotImplementedException();
    }

    isOn() {
        return this.isOn;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

}

module.exports = ColisionHandler;