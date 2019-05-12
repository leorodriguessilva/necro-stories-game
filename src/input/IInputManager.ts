import { IKey } from "./IKey";

export interface IInputManager {

    addInputToHandle(key: IKey, callback: () => boolean): void;

    update(): void;

}
