import { IInputManager } from "./IInputManager";
import { IKey } from "./IKey";

export class InputManager implements IInputManager {

    private keyboardToActionMap: Map<IKey, () => boolean>;

    constructor() {
        this.keyboardToActionMap = new Map<IKey, () => boolean>();
    }

    public addInputToHandle(key: IKey, callback: () => boolean): void {
        if (this.keyboardToActionMap.has(key)) {
            return;
        }
        this.keyboardToActionMap.set(key, callback);
    }

    public update(): void {
        this.keyboardToActionMap.forEach((callback: () => boolean , key: IKey) => {
            if (key.isDown()) {
                callback();
            }
        });
    }

}
