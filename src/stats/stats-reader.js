import getJSONStats from '../config/stats-config-json';
import Stats from './Stats';

export default class StatsReader {

    static stats;

    constructor (mode) {
        this.mode = mode;
        this.stats = undefined;
    }

    generateStats (characterName) {
        if (this.mode === StatsReaderMode.LIVE_MODE) {
            if (this.stats === undefined) {
                this.stats = {};
            }
            return this.stats
        } else if (this.mode === StatsReaderMode.DEBUG_MODE) {
            let jsonStats = getJSONStats();
            this.stats = new Stats(jsonStats[characterName]);
            return this.stats;
        }

    }
}