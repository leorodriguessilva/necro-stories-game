import { CollidedObjectData } from "./CollidedObjectData";

export class ColliderWrapper<Stats> {

    triggerCollidedObjectData: CollidedObjectData<Stats>;
    colisionOwnerCallback: any;

    constructor(triggerCollidedObjectData: CollidedObjectData<Stats>, colisionOwnerCallback: any) {
        this.triggerCollidedObjectData = triggerCollidedObjectData;
        this.colisionOwnerCallback = colisionOwnerCallback;
    }

    destroy(): void {
        this.triggerCollidedObjectData.destroy();
    }

    update(): void {
        this.getCollider().update();
    }

    invokeColisionBetweenObjects<TriggeredCollided>(ownerCollided: CollidedObjectData<TriggeredCollided>, triggerCollided: CollidedObjectData<Stats>, triggerCollidedGroup: any) {
        this.colisionOwnerCallback(ownerCollided, triggerCollided, triggerCollidedGroup);
    }

    getCollidedObjectData(): CollidedObjectData<Stats> {
        return this.triggerCollidedObjectData;
    }

    getCollider(): Phaser.Physics.Arcade.Sprite {
        return this.triggerCollidedObjectData.getSprite();
    }
}