export class ObstacleStats {

    private healthFactor: number;
    private moveSpeedFactor: number;
    private durability: number;
    private density: number;

    constructor(statsDTO: any) {
        this.healthFactor = statsDTO.healthFactor;
        this.moveSpeedFactor = statsDTO.moveSpeedFactor;
        this.durability = statsDTO.durability;
        this.density = statsDTO.density;
    }

    public getHealth(): number {
        return this.healthFactor * this.durability;
    }

    public getMoveSpeed(): number {
        if (this.moveSpeedFactor === 0) {
            return 0;
        }
        return this.moveSpeedFactor / this.density;
    }

    public getHealthFactor(): number {
        return this.healthFactor;
    }

    public setHealthFactor(healthFactor: number) {
        this.healthFactor = healthFactor;
    }

    public getMoveSpeedFactor(): number {
        return this.moveSpeedFactor;
    }

    public setMoveSpeedFactor(moveSpeedFactor: number) {
        this.moveSpeedFactor = moveSpeedFactor;
    }

    public getDurability(): number {
        return this.durability;
    }

    public setDurability(durability: number) {
        this.durability = durability;
    }

    public getDensity(): number {
        return this.density;
    }

    public setDensity(density: number) {
        this.density = density;
    }

}
