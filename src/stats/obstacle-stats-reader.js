var StatsReader = require('./stats-reader');
var ObstacleStatsConfigJson = require('../config/obstacle-stats-config-json');

class ObstacleStatsReader extends StatsReader {

    getStatsConfig() {
        return ObstacleStatsConfigJson.getStats();
    }

    getStatsType() {
        return StatsType.OBSTACLE;
    }

}

module.exports = ObstacleStatsReader;