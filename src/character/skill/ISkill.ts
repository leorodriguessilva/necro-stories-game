import { CharacterMovingDirection } from "../state/CharacterMovingDirection";
import { ICollider } from "../../collider/ICollider";
import { ObstacleStats } from "../../stats/ObstacleStats";
import { IDestructibleObjectStats } from "../../stats/IDestructibleObjectStats";

export interface ISkill extends ICollider<ObstacleStats> {

    update(): void;

    create(scene: Phaser.Scene): void;

    getName(): string;

    cast(
        locationX: number,
        locationY: number,
        movingDirection: CharacterMovingDirection,
        callbackWhenDoneCasting: () => void): void;

    interrupt(): void;

    onHit(firstCollider: ISkill, secondCollider: ICollider<IDestructibleObjectStats>): void;
}
