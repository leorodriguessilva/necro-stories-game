import { CharacterStats } from "./CharacterStats";
import { ObstacleStats } from "./ObstacleStats";

export class StatsFactory {

    private statsCreator: Map<string, (statsDTO: any) => object>;

    constructor() {
        this.statsCreator = new Map<string, any>();

        this.statsCreator.set("character", (statsDTO: any) => {
            return new CharacterStats(statsDTO);
        });

        this.statsCreator.set("obstacle", (statsDTO: any) => {
            return new ObstacleStats(statsDTO);
        });
    }

    public create(type: string, statsDTO: any): object {
        if (this.statsCreator.has(type)) {
            return this.statsCreator[type](statsDTO);
        }
        return null;
    }

}
