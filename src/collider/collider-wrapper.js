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

    invokeColisionBetweenObjects (owerCollided, triggerCollided) {
        this.colisionOwnerCallback(owerCollided, triggerCollided);
    }

    get getCollider () {
        return this.triggerCollidedObjectData.getSprite;
    }
}