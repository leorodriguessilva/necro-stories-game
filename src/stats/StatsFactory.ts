import { CharacterStats } from './CharacterStats';
import { ObstacleStats } from './ObstacleStats';

export class StatsFactory {

    statsCreator: any;

    constructor() {
        this.statsCreator = {
            'character': function (statsDTO: any) {
                return new CharacterStats(statsDTO);
            },
            'obstacle': function (statsDTO: any) {
                return new ObstacleStats(statsDTO);
            },
        };
    }

    create(type: string, statsDTO: any) {
        if (this.statsCreator[type]) {
            return this.statsCreator[type](statsDTO);
        }
        return null;
    }

}