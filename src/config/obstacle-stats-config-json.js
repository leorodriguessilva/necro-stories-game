class ObstacleStatsConfigJson {

    static getStats() {
        return {
            'star': {
                healthFactor: 5,
                moveSpeedFactor: 1,
                durability: 1,
                density: 1,
            },
            'wall': {
                healthFactor: 15,
                moveSpeedFactor: 0,
                durability: 20,
                density: 20,
            },
        };
    }
}

module.exports = ObstacleStatsConfigJson;