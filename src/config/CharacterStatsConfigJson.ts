import { CharacterStats } from '../stats/CharacterStats';

export class CharacterStatsConfigJson {

    static getStats(): Map<string, CharacterStats> {
        const characterStats: Map<string, CharacterStats> = new Map<string, CharacterStats>();
        characterStats.set('necromancer', new CharacterStats({
            healthFactor: 7,
            manaFactor: 9,
            moveSpeedFactor: 6,
            strength: 9,
            inteligence: 20,
            agility: 8,
        }));
        characterStats.set('skeleton', new CharacterStats({
            healthFactor: 7,
            manaFactor: 2,
            moveSpeedFactor: 8,
            strength: 7,
            inteligence: 1,
            agility: 5,
        }));
        return characterStats;
    }
}