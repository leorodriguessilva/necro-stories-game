var StatsReader = require('./stats-reader');
var CharacterStatsConfigJson = require('../config/character-stats-config-json');

class CharacterStatsReader extends StatsReader {

    getStatsConfig () {
        return CharacterStatsConfigJson.getStats();
    }

    getStatsType () {
        return StatsType.CHARACTER;    
    }

}

module.exports = CharacterStatsReader;