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

let skeleton = new Skeleton(100, 400, statsReader, [], []);

let necromancer = new Necromancer(300, 400, statsReader, [], []);

function preload ()
{
    skeleton.preload(this.load);
    necromancer.preload(this.load);
}

function create ()
{
    skeleton.create(this.physics, this.anims, []);

    necromancer.create(this.physics, this.anims, []);

    var leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT, true, true);
    var rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, true, true);

    skeleton.addInputHandler(new WalkLeftInputHandler(leftKey, skeleton));
    skeleton.addInputHandler(new WalkRightInputHandler(rightKey, skeleton));

    necromancer.addInputHandler(new WalkLeftInputHandler(leftKey, necromancer));
    necromancer.addInputHandler(new WalkRightInputHandler(rightKey, necromancer));
}

function update ()
{
    skeleton.update();
    necromancer.update();
}