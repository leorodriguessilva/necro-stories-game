import { StatsFactory } from './StatsFactory';
import { StatsReaderMode } from './StatsReaderMode';
import { NotImplementedException } from '../common/exception/NotImplementedException';

export class StatsReader<Stats> {

    mode: string;
    statsFactory: StatsFactory;
    stats: any;

    constructor(mode: string) {
        this.mode = mode;
        this.statsFactory = new StatsFactory();
        this.stats = undefined;
    }

    generateStats(spriteName: string) : Stats {
        if (this.mode === StatsReaderMode.LIVE_MODE) {
            if (this.stats === undefined) {
                this.stats = {};
            }
            return this.stats;
        }
        const jsonStats = this.getStatsConfig();
        const statsDTO = jsonStats.get(spriteName);

        if (statsDTO) {
            this.stats = this.statsFactory.create(this.getStatsType(), statsDTO);
            return this.stats;
        }
        return null;
    }

    getStatsConfig(): Map<string, Stats>  {
        throw new NotImplementedException();
    }

    getStatsType(): string {
        throw new NotImplementedException();
    }
}