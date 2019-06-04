import { IDamage } from "./IDamage";

export class PhysicalDamage implements IDamage {

    private amount: number;

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }
    
}
