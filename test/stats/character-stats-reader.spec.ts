import "jest";
import { CharacterStatsReader } from "../../src/stats/CharacterStatsReader";
import { StatsReaderMode } from "../../src/stats/StatsReaderMode";
import { CharacterStats } from "../../src/stats/CharacterStats";

test("passing an existing character name key, should return his stats", () => {
    const characterStatsReader = new CharacterStatsReader(StatsReaderMode.DEBUG_MODE);

    const necromancer: CharacterStats = new CharacterStats({
        healthFactor: 7,
        manaFactor: 9,
        moveSpeedFactor: 6,
        strength: 9,
        inteligence: 20,
        agility: 8,
    });

    const characterData = new Map<string, CharacterStats>();
    characterData.set("necromancer", necromancer);
    characterData.set("skeleton", new CharacterStats({
        healthFactor: 5,
        manaFactor: 1,
        moveSpeedFactor: 4,
        strength: 6,
        inteligence: 1,
        agility: 5,
    }));

    characterStatsReader.getStatsConfig = function () {
        return characterData;
    }

    const characterStats = characterStatsReader.generateStats("necromancer");

    expect(characterStats).toEqual(necromancer);
});

test("passing a non existing character name key, should return null stats", () => {
    const characterStatsReader = new CharacterStatsReader(StatsReaderMode.DEBUG_MODE);

    const necromancer: CharacterStats = new CharacterStats({
        healthFactor: 7,
        manaFactor: 9,
        moveSpeedFactor: 6,
        strength: 9,
        inteligence: 20,
        agility: 8,
    });

    const characterData = new Map<string, CharacterStats>();
    characterData.set("necromancer", necromancer);

    characterStatsReader.getStatsConfig = function () {
        return characterData;
    }

    const characterStats = characterStatsReader.generateStats("skeleton");

    expect(characterStats).toBeNull();
});