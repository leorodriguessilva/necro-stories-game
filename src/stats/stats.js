class Stats {
    
    constructor (statsDTO) {
        this.healthFactor = statsDTO.healthFactor;
        this.manaFactor = statsDTO.manaFactor;
        this.moveSpeedFactor = statsDTO.moveSpeedFactor;
        this.strength = statsDTO.strength;
        this.inteligence = statsDTO.inteligence;
        this.agility = statsDTO.agility;
    }

    get getHealth () {
        return this.healthFactor * this.strength;
    }

    set setHealthFactor (healthFactor) {
        this.healthFactor = healthFactor;
    }
    
    get getMana () {
        return this.manaFactor * this.inteligence;
    }

    set setManaFactor (manaFactor) {
        this.manaFactor = manaFactor;
    }

    get getMoveSpeed () {
        return this.moveSpeedFactor * this.agility;
    }

    set setMoveSpeedFactor (moveSpeedFactor) {
        this.moveSpeedFactor = moveSpeedFactor;
    }
    
    get getStrength () {
        return this.strength;
    }

    set setStrength (strength) {
        this.strength = strength;
    }

    get getInteligence () {
        return this.inteligence;
    }

    set setInteligence (inteligence) {
        this.inteligence = inteligence;
    }
    
    get getAgility () {
        return this.agility;
    }

    set setAgility (agility) {
        this.agility = agility;
    }
}