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

let platforms;

let stars;

let statsReader = new StatsReader(StatsReaderMode.DEBUG_MODE);

let skeleton = new Skeleton(100, 400, statsReader, [], []);

let necromancer = new Necromancer(300, 400, statsReader, [], []);

function preload ()
{
    skeleton.preload(this.load);
    necromancer.preload(this.load);
    this.load.image('star', 'assets/star.png');
    this.load.image('ground', 'assets/platform.png');
}

function create ()
{
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {
        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    var starsColliderWrapper = new ColliderWrapper(stars); 

    var ghostColisionHandler = new GhostColisionHandler(this.physics, starsColliderWrapper, function (stats) {
        stats.setMoveSpeedFactor = 12;
    });

    var platformsColliderWrapper = new ColliderWrapper(platforms); 

    var basicColisionHandler = new BasicColisionHandler(this.physics, platformsColliderWrapper);

    skeleton.create(this.physics, this.anims, [ basicColisionHandler ]);

    necromancer.create(this.physics, this.anims, [ basicColisionHandler, ghostColisionHandler ]);

    var leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT, true, true);
    var rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, true, true);

    skeleton.addInputHandler(new WalkLeftInputHandler(leftKey, skeleton));
    skeleton.addInputHandler(new WalkRightInputHandler(rightKey, skeleton));

    necromancer.addInputHandler(new WalkLeftInputHandler(leftKey, necromancer));
    necromancer.addInputHandler(new WalkRightInputHandler(rightKey, necromancer));


    this.physics.add.collider(stars, platforms);
}

function update ()
{
    skeleton.update();
    necromancer.update();
}