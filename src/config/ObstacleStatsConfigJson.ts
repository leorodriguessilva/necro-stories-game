import { ObstacleStats } from '../stats/ObstacleStats';

export class ObstacleStatsConfigJson {

    static getStats(): Map<string, ObstacleStats> {
        const obstacleStats: Map<string, ObstacleStats> = new Map<string, ObstacleStats>();
        obstacleStats.set('star', new ObstacleStats({
            healthFactor: 5,
            moveSpeedFactor: 1,
            durability: 1,
            density: 1,
        }));
        
        obstacleStats.set('wall', new ObstacleStats({
            healthFactor: 15,
            moveSpeedFactor: 0,
            durability: 20,
            density: 20,
        }));

        return obstacleStats;
    }
}