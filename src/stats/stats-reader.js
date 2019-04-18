/*jshint esversion: 6 */

class StatsReader {

    constructor (mode) {
        this.mode = mode;
        this.statsFactory = new StatsFactory();
        this.stats = undefined;
    }

    generateStats (spriteName) {
        if (this.mode === StatsReaderMode.LIVE_MODE) {
            if (this.stats === undefined) {
                this.stats = {};
            }
            return this.stats;
        } 
        var jsonStats = this.getStatsConfig();
        var statsDTO = jsonStats[spriteName];
        this.stats = this.statsFactory.create(this.getStatsType(), statsDTO);
        return this.stats;
    }

    getStatsConfig () {
        throw new NotImplementedException();
    }

    getStatsType () {
        throw new NotImplementedException();    
    }
}