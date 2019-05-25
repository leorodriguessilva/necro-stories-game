import { IColisionWatcher } from "./IColisionWatcher";
import { IColision } from "./IColision";
import { ICollider } from "../collider/ICollider";
import { ColliderType } from "../collider/ColliderType";

export class PhaserColisionWatcher implements IColisionWatcher {

    private physics: Phaser.Physics.Arcade.ArcadePhysics;

    constructor(physics: Phaser.Physics.Arcade.ArcadePhysics) {
        this.physics = physics;
    }

    public addColisionWatcherOver<FirstStats, SecondStats>(
        colision: IColision<FirstStats, SecondStats>,
        isColisionOn: () => boolean): void {
            const firstSpriteCollider = this.getColliderByColliderType<FirstStats>(colision.getFirstCollider());
            const secondSpriteCollider = this.getColliderByColliderType<SecondStats>(colision.getSecondCollider());

            this.physics.add.collider(
                firstSpriteCollider,
                secondSpriteCollider,
                (firstObject: Phaser.GameObjects.GameObject, secondObject: Phaser.GameObjects.GameObject) => {
                    this.onColision(colision);
                },
                isColisionOn,
                this);
    }

    public addOverlapWatcherOver<FirstStats, SecondStats>(
        colision: IColision<FirstStats, SecondStats>,
        isColisionOn: () => boolean): void {
            const firstSpriteCollider = this.getColliderByColliderType<FirstStats>(colision.getFirstCollider());
            const secondSpriteCollider = this.getColliderByColliderType<SecondStats>(colision.getSecondCollider());

            this.physics.add.overlap(
                firstSpriteCollider,
                secondSpriteCollider,
                (firstObject: Phaser.GameObjects.GameObject, secondObject: Phaser.GameObjects.GameObject) => {
                    this.onColision(colision);
                },
                isColisionOn,
                this);
    }

    private onColision<FirstStats, SecondStats>(colision: IColision<FirstStats, SecondStats>): void {
        if (!colision.onColisionHappen) {
            return;
        }
        colision.onColisionHappen(colision.getFirstCollider(), colision.getSecondCollider());
    }

    private getColliderByColliderType<Stats>(collider: ICollider<Stats>):
    Phaser.GameObjects.Sprite |
    Phaser.GameObjects.Group {
        if (collider.getColliderType() === ColliderType.GROUP
        || collider.getColliderType() === ColliderType.STATIC_GROUP) {
            console.log(collider.getSpriteColliderWrapper().getGameObjectGroup());
            return collider.getSpriteColliderWrapper().getGameObjectGroup();
        }

        console.log(collider.getSpriteColliderWrapper().getGameObject());
        return collider.getSpriteColliderWrapper().getGameObject();
    }

}
