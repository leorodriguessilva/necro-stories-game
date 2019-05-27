import { IColisionWatcher } from "../../../src/colision/IColisionWatcher";
import { IColision } from "../../../src/colision/IColision";

class FakeColisionWatcher implements IColisionWatcher {

    private colisionToHandle: IColision<any, any>[];
    private overlapToHandle: IColision<any, any>[];

    public addColisionWatcherOver<FistStats, SecondStats>(colision: IColision<FistStats, SecondStats>, isColisionOn: () => boolean): void {
        this.colisionToHandle.push(colision);
    }    
    
    public addOverlapWatcherOver<FistStats, SecondStats>(colision: IColision<FistStats, SecondStats>, isColisionOn: () => boolean): void {
        this.overlapToHandle.push(colision);
    }

    simulateColisions(): void {
        this.colisionToHandle.forEach(colision => {
            colision.onColisionHappen(colision.getFirstCollider(), colision.getSecondCollider());
        });
    }

    simulateOverlaping(): void {
        this.overlapToHandle.forEach(colision => {
            colision.onColisionHappen(colision.getFirstCollider(), colision.getSecondCollider());
        });
    }

}
