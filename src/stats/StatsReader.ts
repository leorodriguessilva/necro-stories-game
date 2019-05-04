import { StatsFactory } from "./StatsFactory";
import { StatsReaderMode } from "./StatsReaderMode";

export abstract class StatsReader<Stats> {

    private mode: string;
    private statsFactory: StatsFactory;
    private stats: any;

    constructor(mode: string) {
        this.mode = mode;
        this.statsFactory = new StatsFactory();
        this.stats = null;
    }

    public generateStats(spriteName: string): Stats {
        if (this.mode === StatsReaderMode.LIVE_MODE) {
            if (this.stats === null) {
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

    protected abstract getStatsConfig(): Map<string, Stats>;

    protected abstract getStatsType(): string;

}
