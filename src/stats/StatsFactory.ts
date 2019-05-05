import { CharacterStats } from "./CharacterStats";
import { ObstacleStats } from "./ObstacleStats";

export class StatsFactory {

    private readonly statsCreator: Map<string, (statsDTO: any) => object>;

    constructor() {
        this.statsCreator = new Map<string, (statsDTO: any) => object>();

        this.statsCreator.set("character", (statsDTO: any) => {
            return new CharacterStats(statsDTO);
        });

        this.statsCreator.set("obstacle", (statsDTO: any) => {
            return new ObstacleStats(statsDTO);
        });
    }

    public create(type: string, statsDTO: any): object {
        if (this.statsCreator.has(type)) {
            const createStats = this.statsCreator.get(type);
            return createStats(statsDTO);
        }
        return null;
    }

}
