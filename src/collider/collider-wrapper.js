class ColliderWrapper {

    constructor (triggerCollidedObjectData, colisionOwnerCallback) {
        this.triggerCollidedObjectData = triggerCollidedObjectData;
        this.colisionOwnerCallback = colisionOwnerCallback;
    }

    destroy () {
        this.triggerCollidedObjectData.destroy();
    }

    update () {
        this.getCollider.update();
    }

    invokeColisionBetweenObjects (owerCollided, triggerCollided, triggerCollidedGroup) {
        this.colisionOwnerCallback(owerCollided, triggerCollided, triggerCollidedGroup);
    }

    get getCollidedObjectData () {
        return this.triggerCollidedObjectData;
    }

    get getCollider () {
        return this.triggerCollidedObjectData.getSprite;
    }
}