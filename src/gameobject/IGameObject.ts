import { ILoadable } from "../loader/ILoadable";

export interface IGameObject extends ILoadable {

    create(
        physics: Phaser.Physics.Arcade.ArcadePhysics,
        anims: Phaser.Animations.AnimationManager): void;

    update(): void;

}
