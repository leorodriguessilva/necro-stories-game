import { IColision } from "./IColision";
import { ICollider } from "../collider/ICollider";
import { IDestructibleObjectStats } from "../stats/IDestructibleObjectStats";

export class PhaserColision<FirstStats, SecondStats> implements IColision<FirstStats, SecondStats> {

    public onColisionHappen: (firstCollider: ICollider<FirstStats>, secondCollider: ICollider<SecondStats>) => void;

    private readonly firstCollider: ICollider<FirstStats>;
    private readonly secondCollider: ICollider<SecondStats>;
    private readonly callbackOwner: ICollider<IDestructibleObjectStats>;
    private isCollided: boolean;

    constructor(
        firstCollider: ICollider<FirstStats>,
        secondCollider: ICollider<SecondStats>,
        callbackOwner: ICollider<IDestructibleObjectStats>,
        onColisionHappen: (firstCollider: ICollider<FirstStats>, secondCollider: ICollider<SecondStats>) => void) {
            this.firstCollider = firstCollider;
            this.secondCollider = secondCollider;
            this.callbackOwner = callbackOwner;
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

    public getCallbackOwner(): ICollider<IDestructibleObjectStats> {
        return this.callbackOwner;
    }

}
