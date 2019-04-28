import { CollidedObjectData } from "./CollidedObjectData";

export class ColliderWrapper {

    triggerCollidedObjectData: CollidedObjectData;

    constructor(triggerCollidedObjectData, colisionOwnerCallback) {
        this.triggerCollidedObjectData = triggerCollidedObjectData;
        this.colisionOwnerCallback = colisionOwnerCallback;
    }

    destroy() {
        this.triggerCollidedObjectData.destroy();
    }

    update() {
        this.getCollider.update();
    }

    invokeColisionBetweenObjects(ownerCollided, triggerCollided, triggerCollidedGroup) {
        this.colisionOwnerCallback(ownerCollided, triggerCollided, triggerCollidedGroup);
    }

    get getCollidedObjectData() {
        return this.triggerCollidedObjectData;
    }

    get getCollider() {
        return this.triggerCollidedObjectData.getSprite;
    }
}