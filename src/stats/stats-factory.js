var CharacterStats = require('./character-stats');
var ObstacleStats = require('./obstacle-stats');

class StatsFactory {

    constructor() {
        this.statsCreator = {
            'character': function (statsDTO) {
                return new CharacterStats(statsDTO);
            },
            'obstacle': function (statsDTO) {
                return new ObstacleStats(statsDTO);
            },
        };
    }

    create(type, statsDTO) {
        if (this.statsCreator[type]) {
            return this.statsCreator[type](statsDTO);
        }
        return this.statsCreator[StatsType.OBSTACLE](statsDTO);
    }

}

module.exports = StatsFactory;