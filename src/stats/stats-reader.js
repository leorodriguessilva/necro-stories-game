import getStats from '../config/StatsConfig';

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
            this.stats = JSON.parse(getStats());
            return this.stats;
        }

    }
}