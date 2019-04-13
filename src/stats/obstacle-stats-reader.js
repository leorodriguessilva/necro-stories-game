class ObstacleStatsReader extends StatsReader {

    getStatsConfig () {
        return ObstacleStatsConfigJson.getStats();
    }

    getStatsType () {
        return StatsType.OBSTACLE;    
    }

}