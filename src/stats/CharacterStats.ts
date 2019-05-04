export class CharacterStats {

    healthFactor: number;
    manaFactor: number;
    moveSpeedFactor: number;
    strength: number;
    inteligence: number;
    agility: number;

    constructor(statsDTO: any) {
        this.healthFactor = statsDTO.healthFactor;
        this.manaFactor = statsDTO.manaFactor;
        this.moveSpeedFactor = statsDTO.moveSpeedFactor;
        this.strength = statsDTO.strength;
        this.inteligence = statsDTO.inteligence;
        this.agility = statsDTO.agility;
    }

    getHealth(): number {
        return this.healthFactor * this.strength;
    }

    setHealthFactor(healthFactor: number) {
        this.healthFactor = healthFactor;
    }

    getMana(): number {
        return this.manaFactor * this.inteligence;
    }

    setManaFactor(manaFactor: number) {
        this.manaFactor = manaFactor;
    }

    getMoveSpeed(): number {
        return this.moveSpeedFactor * this.agility;
    }

    setMoveSpeedFactor(moveSpeedFactor: number) {
        this.moveSpeedFactor = moveSpeedFactor;
    }

    getStrength(): number {
        return this.strength;
    }

    setStrength(strength: number) {
        this.strength = strength;
    }

    getInteligence(): number {
        return this.inteligence;
    }

    setInteligence(inteligence: number) {
        this.inteligence = inteligence;
    }

    getAgility(): number {
        return this.agility;
    }

    setAgility(agility: number) {
        this.agility = agility;
    }
}