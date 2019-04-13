class CharacterStatsReader extends StatsReader {

    getStatsConfig () {
        return CharacterStatsConfigJson.getStats();
    }

    getStatsType () {
        return StatsType.CHARACTER;    
    }

}