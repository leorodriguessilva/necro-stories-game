import { IColisionManager } from "./IColisionManager";
import { ColisionType } from "./ColisionType";
import { ICollider } from "../collider/ICollider";
import { ColliderType } from "../collider/ColliderType";
import { ISkill } from "../character/skill/ISkill";

export class ColisionManager implements IColisionManager {

    private physics: Phaser.Physics.Arcade.ArcadePhysics;
    private isOn: boolean;

    constructor(physics: Phaser.Physics.Arcade.ArcadePhysics) {
        this.physics = physics;
        this.turnColisionOn();
    }

    public addColisionToHandle<FirstStats, SecondStats>(
        firstCollider: ICollider<FirstStats>,
        secondCollider: ICollider<SecondStats>,
        colisionCallback: ArcadePhysicsCallback,
        colisionType: ColisionType): void {
        const firstSpriteCollider = this.getColliderByColliderType<FirstStats>(firstCollider);
        const secondSpriteCollider = this.getColliderByColliderType<SecondStats>(secondCollider);

        this.addColision(firstSpriteCollider, secondSpriteCollider, colisionCallback, colisionType);
    }

    public addSkillColisionToHandle<Stats>(
        firstCollider: ICollider<Stats>,
        secondCollider: ISkill,
        colisionCallback: ArcadePhysicsCallback,
        colisionType: ColisionType): void {
        const firstSpriteCollider = this.getColliderByColliderType<Stats>(firstCollider);

        this.addColision(firstSpriteCollider, secondCollider.getSprite(), colisionCallback, colisionType);
    }

    public isColisionOn(): boolean {
        return this.isOn;
    }

    public turnColisionOn(): void {
        this.isOn = true;
    }

    public turnColisionOff(): void {
        this.isOn = false;
    }

    private addColision(
        firstSpriteCollider: Phaser.GameObjects.Sprite,
        secondSpriteCollider: Phaser.GameObjects.Sprite,
        colisionCallback: ArcadePhysicsCallback,
        colisionType: ColisionType): void {
        if (colisionType === ColisionType.COLLIDE) {
            this.physics.add.collider(
                firstSpriteCollider,
                secondSpriteCollider,
                colisionCallback,
                this.isColisionOn,
                this);
            return;
        }

        this.physics.add.overlap(
            firstSpriteCollider,
            secondSpriteCollider,
            colisionCallback,
            this.isColisionOn,
            this);
    }

    private getColliderByColliderType<Stats>(collider: ICollider<Stats>): any {
        if (collider.getColliderType() === ColliderType.STATIC) {
            return collider.getSpriteColliderWrapper().getStaticGroup();
        }

        if (collider.getColliderType() === ColliderType.GROUP) {
            return collider.getSpriteColliderWrapper().getSpriteGroup();
        }

        return collider.getSpriteColliderWrapper().getSprite();
    }

}
