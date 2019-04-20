const CharacterStatsReader = require('../../src/stats/character-stats-reader');
const StatsReaderMode = require('../../src/stats/stats-reader-mode');

test('passing an existing character name key, should return his stats', () => {
    var characterStatsReader = new CharacterStatsReader(StatsReaderMode.DEBUG_MODE);

    var necromancer = {
        healthFactor: 7,
        manaFactor: 9,
        moveSpeedFactor: 6,
        strength: 9,
        inteligence: 20,
        agility: 8,
    };

    var characterData = {
        'necromancer': necromancer,
        'skeleton' : {
            healthFactor: 5,
            manaFactor: 1,
            moveSpeedFactor: 4,
            strength: 6,
            inteligence: 1,
            agility: 5,
        }
    };

    characterStatsReader.getStatsConfig = function () {
        return characterData;
    }

    var characterStats = characterStatsReader.generateStats('necromancer');

    expect(characterStats).toEqual(necromancer);
});

test('passing a non existing character name key, should return undefined stats', () => {
    var characterStatsReader = new CharacterStatsReader(StatsReaderMode.DEBUG_MODE);

    var necromancer = {
        healthFactor: 7,
        manaFactor: 9,
        moveSpeedFactor: 6,
        strength: 9,
        inteligence: 20,
        agility: 8,
    };

    var characterData = {
        'necromancer': necromancer
    };

    characterStatsReader.getStatsConfig = function () {
        return characterData;
    }

    var characterStats = characterStatsReader.generateStats('skeleton');

    expect(characterStats).toBeNull();
});