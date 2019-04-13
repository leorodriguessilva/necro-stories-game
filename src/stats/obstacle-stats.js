class ObstacleStats {
    
    constructor (statsDTO) {
        this.healthFactor = statsDTO.healthFactor;
        this.moveSpeedFactor = statsDTO.moveSpeedFactor;
        this.durability = statsDTO.durability;
        this.density = statsDTO.density;
    }
    
    get getHealth () {
        return this.healthFactor * this.durability;
    }

    set setHealthFactor (healthFactor) {
        this.healthFactor = healthFactor;
    }

    get getMoveSpeed () {
        if (this.moveSpeedFactor == 0) {
            return 0;
        }
        return this.moveSpeedFactor / this.density;
    }

    set setMoveSpeedFactor (moveSpeedFactor) {
        this.moveSpeedFactor = moveSpeedFactor;
    }
    
    get getDurability () {
        return this.durability;
    }

    set setDurability (durability) {
        this.durability = durability;
    }
    
    get getDensity () {
        return this.density;
    }

    set setDensity (density) {
        this.density = density;
    }
}