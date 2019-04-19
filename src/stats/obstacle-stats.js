class ObstacleStats {

    constructor(statsDTO) {
        this.healthFactor = statsDTO.healthFactor;
        this.moveSpeedFactor = statsDTO.moveSpeedFactor;
        this.durability = statsDTO.durability;
        this.density = statsDTO.density;
    }

    getHealth() {
        return this.healthFactor * this.durability;
    }

    getMoveSpeed() {
        if (this.moveSpeedFactor == 0) {
            return 0;
        }
        return this.moveSpeedFactor / this.density;
    }

    getHealthFactor() {
        return this.healthFactor;
    }

    setHealthFactor(healthFactor) {
        this.healthFactor = healthFactor;
    }

    getMoveSpeedFactor() {
        return this.moveSpeedFactor;
    }

    setMoveSpeedFactor(moveSpeedFactor) {
        this.moveSpeedFactor = moveSpeedFactor;
    }

    getDurability() {
        return this.durability;
    }

    setDurability(durability) {
        this.durability = durability;
    }

    getDensity() {
        return this.density;
    }

    setDensity(density) {
        this.density = density;
    }
}

module.exports = ObstacleStats;