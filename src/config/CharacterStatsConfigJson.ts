import { CharacterStats } from '../stats/CharacterStats';

export class CharacterStatsConfigJson {

    static getStats(): [string, CharacterStats] {
        var characterStats: [string, CharacterStats];
        characterStats.push('necromancer', new CharacterStats({
            healthFactor: 7,
            manaFactor: 9,
            moveSpeedFactor: 6,
            strength: 9,
            inteligence: 20,
            agility: 8,
        }));
        characterStats.push('skeleton', new CharacterStats({
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