import { IEffect } from "./IEffect";

export class PhysicalDamageEffect implements IEffect {

    private amount: number;

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }
    
}
