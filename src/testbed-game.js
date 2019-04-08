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

let game = new Phaser.Game(config);

let statsReader = new StatsReader(StatsReaderMode.DEBUG_MODE);

let necromancer = new Necromancer(100, 400, statsReader, [], []);

function preload ()
{
    necromancer.preload(this.load);
}

function create ()
{
    necromancer.create(this.physics, this.anims, []);

    var leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT, true, true);
    var rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, true, true);

    var walkLeftInputHandler = new WalkLeftInputHandler(leftKey, necromancer, 'necromancer-left')
    var walkRightInputHandler = new WalkRightInputHandler(rightKey, necromancer, 'necromancer-right')

    necromancer.addInputHandler(walkLeftInputHandler);
    necromancer.addInputHandler(walkRightInputHandler);
}

function update ()
{
    necromancer.update();
}