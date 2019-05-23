import { IColision } from "./IColision";
import { ICollider } from "../collider/ICollider";

export class PhaserColision<FirstStats, SecondStats> implements IColision<FirstStats, SecondStats> {

    public onColisionHappen: (firstCollider: ICollider<FirstStats>, secondCollider: ICollider<SecondStats>) => void;

    private readonly firstCollider: ICollider<FirstStats>;
    private readonly secondCollider: ICollider<SecondStats>;
    private isCollided: boolean;

    constructor(
        firstCollider: ICollider<FirstStats>,
        secondCollider: ICollider<SecondStats>,
        onColisionHappen: (firstCollider: ICollider<FirstStats>, secondCollider: ICollider<SecondStats>) => void) {
            this.firstCollider = firstCollider;
            this.secondCollider = secondCollider;
            this.onColisionHappen = onColisionHappen;
    }

    public getFirstCollider(): ICollider<FirstStats> {
        return this.firstCollider;
    }

    public getSecondCollider(): ICollider<SecondStats> {
        return this.secondCollider;
    }

    public hasCollided(): boolean {
        return this.isCollided;
    }

}
