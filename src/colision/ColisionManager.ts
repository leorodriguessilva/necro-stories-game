import { IColisionManager } from "./IColisionManager";
import { CollidedObjectData } from "../collider/CollidedObjectData";
import { ColisionType } from "./ColisionType";

export class ColisionManager implements IColisionManager {

    private physics: Phaser.Physics.Arcade.ArcadePhysics;
    private isOn: boolean;

    constructor() {
        this.turnColisionOn();
    }

    addColisionToHandle<FirstStats, SecondStats>(
        firstCollider: CollidedObjectData<FirstStats>,
        secondCollider: CollidedObjectData<SecondStats>,
        colisionCallback: ArcadePhysicsCallback,
        colisionType: ColisionType): void {

        if (colisionType === ColisionType.COLLIDE) {
            this.physics.add.collider(
                firstCollider.getSprite(),
                secondCollider.getSprite(),
                colisionCallback,
                this.isColisionOn,
                this);
            return;
        }
        
        this.physics.add.overlap(
            firstCollider.getSprite(),
            secondCollider.getSprite(),
            colisionCallback,
            this.isColisionOn,
            this);
    }

    isColisionOn(): boolean {
        return this.isOn;
    }

    turnColisionOn(): void {
        this.isOn = true;
    }

    turnColisionOff(): void {
        this.isOn = false;
    }
}