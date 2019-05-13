import { ILoadable } from "../loader/ILoadable";

export interface IGameObject extends ILoadable {

    create(scene: Phaser.Scene): void;

    update(): void;

}
