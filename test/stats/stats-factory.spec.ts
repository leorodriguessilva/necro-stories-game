import "jest";
import { StatsFactory } from "../../src/stats/StatsFactory";
import { StatsType } from "../../src/stats/StatsType";

test('passing the character type should return the character stats populated by the DTO', () => {
    const statsFactory = new StatsFactory();

    const necromancer = {
        healthFactor: 7,
        manaFactor: 9,
        moveSpeedFactor: 6,
        strength: 9,
        inteligence: 20,
        agility: 8,
    };

    const stats = statsFactory.create(StatsType.CHARACTER, {
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
    const statsFactory = new StatsFactory();

    const star = {
        healthFactor: 5,
        moveSpeedFactor: 1,
        durability: 1,
        density: 1,
    };

    const stats = statsFactory.create(StatsType.OBSTACLE, {
        healthFactor: 5,
        moveSpeedFactor: 1,
        durability: 1,
        density: 1,
    });

    expect(stats).toEqual(star);
});

test('passing no type should return null', () => {
    const statsFactory = new StatsFactory();

    const stats = statsFactory.create("non-exsisting-type", { });

    expect(stats).toBeNull();
});