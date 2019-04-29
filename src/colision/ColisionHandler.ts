import { NotImplementedException } from '../common/exception/NotImplementedException';
import { ColliderWrapper } from '../collider/ColliderWrapper';
import { CollidedObjectData } from '../collider/CollidedObjectData';

export class ColisionHandler<Stats> {

    physics: Phaser.Physics.Arcade.ArcadePhysics;
    colliderWrapper: ColliderWrapper<Stats>;
    isOn: boolean;

    constructor(physics: Phaser.Physics.Arcade.ArcadePhysics, colliderWrapper: ColliderWrapper<Stats>) {
        this.physics = physics;
        this.colliderWrapper = colliderWrapper;
        this.isOn = true;
    }

    handle<Stats>(triggerCollidedObjectData: CollidedObjectData<Stats>) {
        this.colliderWrapper.invokeColisionBetweenObjects(
            this.character,
            triggerCollidedObjectData,
            this.colliderWrapper.getCollidedObjectData);
    }

    addColliderToHandle<Stats>(ownerCollidedObjectData: CollidedObjectData<Stats>) {
        throw new NotImplementedException();
    }

    isTurnedOn() {
        return this.isOn;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

}