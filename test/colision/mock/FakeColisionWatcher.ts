import { IColisionWatcher } from "../../../src/colision/IColisionWatcher";
import { IColision } from "../../../src/colision/IColision";
import { FakeColision } from "./FakeColision";

export class FakeColisionWatcher implements IColisionWatcher {

    private colisionToHandle: IColision<any, any>[];
    private overlapToHandle: IColision<any, any>[];

    constructor() {
        this.colisionToHandle = new Array();
        this.overlapToHandle = new Array();
    }

    public addColisionWatcherOver<FistStats, SecondStats>(colision: IColision<FistStats, SecondStats>, isColisionOn: () => boolean): void {
        this.colisionToHandle.push(colision);
    }    
    
    public addOverlapWatcherOver<FistStats, SecondStats>(colision: IColision<FistStats, SecondStats>, isColisionOn: () => boolean): void {
        this.overlapToHandle.push(colision);
    }

    simulateColisions<FirstStats, SecondStats>(): void {
        this.colisionToHandle.forEach(colision => {
            const fakeColision = colision as FakeColision<FirstStats, SecondStats>;
            if (fakeColision.hasCollided()) {
                fakeColision.onColisionHappen(colision.getFirstCollider(), colision.getSecondCollider());
            }
        });
    }

    simulateOverlaping<FirstStats, SecondStats>(): void {
        this.overlapToHandle.forEach(colision => {
            const fakeColision = colision as FakeColision<FirstStats, SecondStats>;
            if (fakeColision.hasCollided()) {
                fakeColision.onColisionHappen(colision.getFirstCollider(), colision.getSecondCollider());
            }
        });
    }

}
