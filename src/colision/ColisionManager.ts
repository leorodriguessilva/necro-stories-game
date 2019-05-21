import { IColisionManager } from "./IColisionManager";
import { ColisionType } from "./ColisionType";
import { ICollider } from "../collider/ICollider";
import { ColliderType } from "../collider/ColliderType";
import { ISkill } from "../character/skill/ISkill";
import { IColisionWatcher } from "./IColisionWatcher";
import { IColision } from "./IColision";
import { PhaserColision } from "./PhaserColision";

export class ColisionManager implements IColisionManager {

    private colisionWatcher: IColisionWatcher;
    private isOn: boolean;

    constructor(colisionWatcher: IColisionWatcher) {
        this.colisionWatcher = colisionWatcher;
        this.turnColisionOn();
    }
    public addColisionToHandle<FirstStats, SecondStats>(
        colision: IColision<FirstStats, SecondStats>,
        colisionType: ColisionType): void {

        this.addColision(colision, colisionType);
    }

    public addSkillColisionToHandle<Stats>(
        firstCollider: ICollider<Stats>,
        secondCollider: ISkill,
        colisionCallback: ArcadePhysicsCallback,
        colisionType: ColisionType): void {
        
        const colision = new PhaserColision();

        this.addColision(firstSpriteCollider, secondCollider.getSprite(), colisionCallback, colisionType);
    }

    public isColisionOn(): boolean {
        return this.isOn;
    }

    public turnColisionOn(): void {
        this.isOn = true;
    }

    public turnColisionOff(): void {
        this.isOn = false;
    }

    private addColision<FirstStats, SecondStats>(
        colision: IColision<FirstStats, SecondStats>,
        colisionType: ColisionType): void {
        if (colisionType === ColisionType.COLLIDE) {
            this.colisionWatcher.addColisionWatcherOver(
                colision,
                this.isColisionOn);
            return;
        }

        this.colisionWatcher.addOverlapWatcherOver(
            colision,
            this.isColisionOn);
    }

}
