const ObstacleStatsReader = require('../../src/stats/obstacle-stats-reader');
const StatsReaderMode = require('../../src/stats/stats-reader-mode');

test('passing an existing character name key, should return his stats', () => {
    var obstacleStatsReader = new ObstacleStatsReader(StatsReaderMode.DEBUG_MODE);

    var star = {
        healthFactor: 5,
        moveSpeedFactor: 1,
        durability: 1,
        density: 1,
    };

    var obstaclesData = {
        'star': star,
        'wall' : {
            healthFactor: 15,
            moveSpeedFactor: 0,
            durability: 20,
            density: 20,
        }
    };

    obstacleStatsReader.getStatsConfig = function () {
        return obstaclesData;
    }

    var obstacleStats = obstacleStatsReader.generateStats('star');

    expect(obstacleStats).toEqual(star);
});

test('passing a non existing character name key, should return undefined stats', () => {
    var obstacleStatsReader = new ObstacleStatsReader(StatsReaderMode.DEBUG_MODE);

    var star = {
        healthFactor: 5,
        moveSpeedFactor: 1,
        durability: 1,
        density: 1,
    };

    var obstaclesData = {
        'star': star
    };

    obstacleStatsReader.getStatsConfig = function () {
        return obstaclesData;
    }

    var obstacleStats = obstacleStatsReader.generateStats('wall');

    expect(obstacleStats).toBeNull();
});