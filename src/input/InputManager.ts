import { IInputManager } from "./IInputManager";
import { IKey } from "./IKey";

export class InputManager implements IInputManager {

    private keyboardToActionMap: Map<IKey, () => boolean>;
    private whenNoInputHandler: () => void;

    constructor() {
        this.keyboardToActionMap = new Map<IKey, () => boolean>();
    }

    public addInputToHandle(key: IKey, callback: () => boolean): void {
        if (this.keyboardToActionMap.has(key)) {
            return;
        }
        this.keyboardToActionMap.set(key, callback);
    }

    public addWhenNoInputHandler(callback: () => void): void {
        this.whenNoInputHandler = callback;
    }

    public update(): void {
        let noInputReceived = false;
        this.keyboardToActionMap.forEach((callback: () => boolean, key: IKey) => {
            if (key.isDown()) {
                noInputReceived = true;
                callback();
                return;
            }
        });

        if (noInputReceived) {
            this.whenNoInputHandler();
        }
    }
}
