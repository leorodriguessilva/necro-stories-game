import "phaser";

export interface IInputManager {

    addInputToHandle(key: Phaser.Input.Keyboard.Key ,callback: () => boolean): void;

    update(): void;

}
