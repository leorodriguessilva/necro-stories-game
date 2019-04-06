export default class Stats {
    
    constructor (statsDTO) {
        this.health = statsDTO.health;
        this.mana = statsDTO.mana;
        this.strength = statsDTO.strength;
        this.inteligence = statsDTO.inteligence;
        this.agility = statsDTO.agility;
    }

    get getHealth () {
        return this.health;
    }

    set setHealth (health) {
        this.health = health;
    }
    
    get getMana () {
        return this.mana;
    }

    set setMana (mana) {
        this.mana = mana;
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