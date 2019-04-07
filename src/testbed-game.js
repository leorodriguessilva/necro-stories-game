var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

let statsReader = new StatsReader(StatsReaderMode.DEBUG_MODE);

let necromancer = new Necromancer(100, 400, statsReader, [], []);

function preload ()
{
    necromancer.preload(this.load);
}

function create ()
{
    necromancer.create(this.physics, this.anims, []);
}

function update ()
{

}