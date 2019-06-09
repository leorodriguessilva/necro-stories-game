export interface IDestructibleObjectStats {

    getCurrentHealth(): number;

    diminishCurrentHealth(damage: number): void;

}
