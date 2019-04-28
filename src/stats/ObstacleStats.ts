export class ObstacleStats {

    healthFactor: number;
    moveSpeedFactor: number;
    durability: number;
    density: number;

    constructor(statsDTO: any) {
        this.healthFactor = statsDTO.healthFactor;
        this.moveSpeedFactor = statsDTO.moveSpeedFactor;
        this.durability = statsDTO.durability;
        this.density = statsDTO.density;
    }

    getHealth(): number {
        return this.healthFactor * this.durability;
    }

    getMoveSpeed(): number {
        if (this.moveSpeedFactor == 0) {
            return 0;
        }
        return this.moveSpeedFactor / this.density;
    }

    getHealthFactor(): number {
        return this.healthFactor;
    }

    setHealthFactor(healthFactor: number) {
        this.healthFactor = healthFactor;
    }

    getMoveSpeedFactor(): number {
        return this.moveSpeedFactor;
    }

    setMoveSpeedFactor(moveSpeedFactor: number) {
        this.moveSpeedFactor = moveSpeedFactor;
    }

    getDurability(): number {
        return this.durability;
    }

    setDurability(durability: number) {
        this.durability = durability;
    }

    getDensity(): number {
        return this.density;
    }

    setDensity(density: number) {
        this.density = density;
    }
}

module.exports = ObstacleStats;