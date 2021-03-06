import { IDestructibleObjectStats } from "./IDestructibleObjectStats";

export class CharacterStats implements IDestructibleObjectStats {

    private healthFactor: number;
    private manaFactor: number;
    private moveSpeedFactor: number;
    private strength: number;
    private inteligence: number;
    private agility: number;
    private currentHealth: number;

    constructor(statsDTO: any) {
        this.healthFactor = statsDTO.healthFactor;
        this.manaFactor = statsDTO.manaFactor;
        this.moveSpeedFactor = statsDTO.moveSpeedFactor;
        this.strength = statsDTO.strength;
        this.inteligence = statsDTO.inteligence;
        this.agility = statsDTO.agility;
        this.currentHealth = this.getHealth();
    }

    public getHealth(): number {
        return this.healthFactor * this.strength;
    }

    public getCurrentHealth(): number {
        return this.currentHealth;
    }

    public diminishCurrentHealth(damage: number): void {
        this.currentHealth -= damage;
    }

    public setHealthFactor(healthFactor: number) {
        this.healthFactor = healthFactor;
    }

    public getMana(): number {
        return this.manaFactor * this.inteligence;
    }

    public setManaFactor(manaFactor: number) {
        this.manaFactor = manaFactor;
    }

    public getMoveSpeed(): number {
        return this.moveSpeedFactor * this.agility;
    }

    public setMoveSpeedFactor(moveSpeedFactor: number) {
        this.moveSpeedFactor = moveSpeedFactor;
    }

    public getStrength(): number {
        return this.strength;
    }

    public setStrength(strength: number) {
        this.strength = strength;
    }

    public getInteligence(): number {
        return this.inteligence;
    }

    public setInteligence(inteligence: number) {
        this.inteligence = inteligence;
    }

    public getAgility(): number {
        return this.agility;
    }

    public setAgility(agility: number) {
        this.agility = agility;
    }

}
