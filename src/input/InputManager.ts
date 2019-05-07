import { IInputManager } from "./IInputManager";

export class InputManager implements IInputManager {

    private keyboardToActionMap: Map<Phaser.Input.Keyboard.Key, () => boolean>;

    constructor() {
        this.keyboardToActionMap = new Map<Phaser.Input.Keyboard.Key, () => boolean>();
    }

    public addInputToHandle(key: Phaser.Input.Keyboard.Key, callback: () => boolean): void {
        if (this.keyboardToActionMap.has(key)) {
            return;
        }
        this.keyboardToActionMap.set(key, callback);
    }

    public update(): void {
        this.keyboardToActionMap.forEach((callback: () => boolean , key: Phaser.Input.Keyboard.Key) => {
            if (key.isDown) {
                callback();
            }
        });
    }

}
