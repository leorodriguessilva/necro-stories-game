class StatsReader {

    static stats;
    static statsFactory;

    constructor (mode) {
        this.mode = mode;
        this.statsFactory = new StatsFactory();
        this.stats = undefined;
    }

    generateStats (characterName) {
        if (this.mode === StatsReaderMode.LIVE_MODE) {
            if (this.stats === undefined) {
                this.stats = {};
            }
            return this.stats
        } 
        var jsonStats = getStatsConfig();
        var statsDTO = jsonStats[characterName];
        this.stats = statsFactory.create(getStatsType(), statsDTO);
        return this.stats;
    }

    getStatsConfig () {
        throw new NotImplementedException();
    }

    getStatsType () {
        throw new NotImplementedException();    
    }
}