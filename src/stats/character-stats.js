class CharacterStats {
    
    constructor (statsDTO) {
        this.healthFactor = statsDTO.healthFactor;
        this.manaFactor = statsDTO.manaFactor;
        this.moveSpeedFactor = statsDTO.moveSpeedFactor;
        this.strength = statsDTO.strength;
        this.inteligence = statsDTO.inteligence;
        this.agility = statsDTO.agility;
    }

    getHealth () {
        return this.healthFactor * this.strength;
    }

    setHealthFactor (healthFactor) {
        this.healthFactor = healthFactor;
    }
    
    getMana () {
        return this.manaFactor * this.inteligence;
    }

    setManaFactor (manaFactor) {
        this.manaFactor = manaFactor;
    }

    getMoveSpeed () {
        return this.moveSpeedFactor * this.agility;
    }

    setMoveSpeedFactor (moveSpeedFactor) {
        this.moveSpeedFactor = moveSpeedFactor;
    }
    
    getStrength () {
        return this.strength;
    }

    setStrength (strength) {
        this.strength = strength;
    }

    getInteligence () {
        return this.inteligence;
    }

    setInteligence (inteligence) {
        this.inteligence = inteligence;
    }
    
    getAgility () {
        return this.agility;
    }

    setAgility (agility) {
        this.agility = agility;
    }
}

module.exports = CharacterStats;