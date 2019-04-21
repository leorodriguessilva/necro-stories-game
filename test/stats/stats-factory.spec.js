const StatsFactory = require('../../src/stats/stats-factory');
const StatsType = require('../../src/stats/stats-type');

test('passing the character type should return the character stats populated by the DTO', () => {
    var statsFactory = new StatsFactory();

    var necromancer = {
        healthFactor: 7,
        manaFactor: 9,
        moveSpeedFactor: 6,
        strength: 9,
        inteligence: 20,
        agility: 8,
    };

    var stats = statsFactory.create(StatsType.CHARACTER, {
        healthFactor: 7,
        manaFactor: 9,
        moveSpeedFactor: 6,
        strength: 9,
        inteligence: 20,
        agility: 8,
    });

    expect(stats).toEqual(necromancer);
});

test('passing the obstacle type should return the obstacle stats populated by the DTO', () => {
    var statsFactory = new StatsFactory();

    var star = {
        healthFactor: 5,
        moveSpeedFactor: 1,
        durability: 1,
        density: 1,
    };

    var stats = statsFactory.create(StatsType.OBSTACLE, {
        healthFactor: 5,
        moveSpeedFactor: 1,
        durability: 1,
        density: 1,
    });

    expect(stats).toEqual(star);
});

test('passing no type should return null', () => {
    var statsFactory = new StatsFactory();

    var stats = statsFactory.create("non-exsisting-type", { });

    expect(stats).toBeNull();
});