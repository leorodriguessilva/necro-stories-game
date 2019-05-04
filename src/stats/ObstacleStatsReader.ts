import { StatsReader } from "./StatsReader";
import { ObstacleStatsConfigJson } from "../config/ObstacleStatsConfigJson";
import { StatsType } from "./StatsType";
import { ObstacleStats } from "./ObstacleStats";

export class ObstacleStatsReader extends StatsReader<ObstacleStats> {

    public getStatsConfig(): Map<string, ObstacleStats> {
        return ObstacleStatsConfigJson.getStats();
    }

    public getStatsType(): string {
        return StatsType.OBSTACLE;
    }

}
