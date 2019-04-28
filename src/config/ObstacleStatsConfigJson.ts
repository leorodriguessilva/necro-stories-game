import { ObstacleStats } from '../stats/ObstacleStats';

export class ObstacleStatsConfigJson {

    static getStats(): [string, ObstacleStats] {
        var obstacleStats: [string, ObstacleStats];
        obstacleStats.push('star', new ObstacleStats({
            healthFactor: 5,
            moveSpeedFactor: 1,
            durability: 1,
            density: 1,
        }));
        
        obstacleStats.push('wall', new ObstacleStats({
            healthFactor: 15,
            moveSpeedFactor: 0,
            durability: 20,
            density: 20,
        }));

        return obstacleStats;
    }
}