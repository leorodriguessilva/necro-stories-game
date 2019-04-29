import { StatsReader } from './StatsReader';
import { CharacterStatsConfigJson } from '../config/CharacterStatsConfigJson';
import { StatsType } from './StatsType';
import { CharacterStats } from './CharacterStats';

export class CharacterStatsReader extends StatsReader<CharacterStats> {

    getStatsConfig (): Map<string, CharacterStats> {
        return CharacterStatsConfigJson.getStats();
    }

    getStatsType (): string {
        return StatsType.CHARACTER;    
    }

}