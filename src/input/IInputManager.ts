import { IKey } from "./IKey";

export interface IInputManager {

    addInputToHandle(key: IKey, callback: () => boolean): void;

    addWhenNoInputHandler(callback: () => void): void;

    update(): void;

}
