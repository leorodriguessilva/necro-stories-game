import { IColision } from "../../../src/colision/IColision";
import { ICollider } from "../../../src/collider/ICollider";
import { IDestructibleObjectStats } from "../../../src/stats/IDestructibleObjectStats";

export class FakeColision<FirstStats, SecondStats> implements IColision<FirstStats, SecondStats> {

    public onColisionHappen: (firstCollider: ICollider<FirstStats>, secondCollider: ICollider<SecondStats>) => void;   

    private isCollided: boolean;
    private firstCollider: ICollider<FirstStats>;
    private secondCollider: ICollider<SecondStats>;

    constructor(isCollided: boolean, firstCollider: ICollider<FirstStats>, secondCollider: ICollider<SecondStats>) {
        this.isCollided = isCollided;
        this.firstCollider = firstCollider;
        this.secondCollider = secondCollider;
    }

    public getFirstCollider(): ICollider<FirstStats> {
        return this.firstCollider;
    }

    public getSecondCollider(): ICollider<SecondStats> {
        return this.secondCollider;
    }

    public getCallbackOwner(): ICollider<IDestructibleObjectStats> {
        return null;
    }

    hasCollided(): boolean {
        return this.isCollided;
    }
}
