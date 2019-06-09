import "jest";
import { ObstacleStatsReader } from "../../src/stats/ObstacleStatsReader";
import { StatsReaderMode } from "../../src/stats/StatsReaderMode";
import { ObstacleStats } from "../../src/stats/ObstacleStats";

test("passing an existing character name key, should return his stats", () => {
    const obstacleStatsReader = new ObstacleStatsReader(StatsReaderMode.DEBUG_MODE);

    const star = {
        healthFactor: 5,
        moveSpeedFactor: 1,
        durability: 1,
        density: 1,
        currentHealth: 5 * 1,
    };

    const obstaclesData: Map<string, any> = new Map<string, any>();
    obstaclesData.set("star", star);
    obstaclesData.set("wall", {
        healthFactor: 15,
        moveSpeedFactor: 0,
        durability: 20,
        density: 20,
    });

    obstacleStatsReader.getStatsConfig = function () {
        return obstaclesData;
    }

    const obstacleStats = obstacleStatsReader.generateStats("star");

    expect(obstacleStats).toEqual(star);
});

test("passing a non existing character name key, should return undefined stats", () => {
    const obstacleStatsReader = new ObstacleStatsReader(StatsReaderMode.DEBUG_MODE);

    const star = {
        healthFactor: 5,
        moveSpeedFactor: 1,
        durability: 1,
        density: 1,
    };

    const obstaclesData: Map<string, any> = new Map<string, any>();
    obstaclesData.set("star", star);

    obstacleStatsReader.getStatsConfig = function () {
        return obstaclesData;
    }

    const obstacleStats = obstacleStatsReader.generateStats("wall");

    expect(obstacleStats).toBeNull();
});