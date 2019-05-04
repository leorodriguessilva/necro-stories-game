import { StatsReader } from "./StatsReader";
import { CharacterStatsConfigJson } from "../config/CharacterStatsConfigJson";
import { StatsType } from "./StatsType";
import { CharacterStats } from "./CharacterStats";

export class CharacterStatsReader extends StatsReader<CharacterStats> {

    public getStatsConfig(): Map<string, CharacterStats> {
        return CharacterStatsConfigJson.getStats();
    }

    public getStatsType(): string {
        return StatsType.CHARACTER;
    }

}
