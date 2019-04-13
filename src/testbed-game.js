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

let characterStatsReader = new CharacterStatsReader(StatsReaderMode.DEBUG_MODE);

let obstacleStatsReader = new ObstacleStatsReader(StatsReaderMode.DEBUG_MODE);

let skeleton = new Skeleton(100, 400, characterStatsReader, [], []);

let necromancer = new Necromancer(300, 400, characterStatsReader, [], []);

let starsObstacle = new BasicObstacle('star', obstacleStatsReader);

function preload ()
{
    skeleton.preload(this.load);
    necromancer.preload(this.load);
    starsObstacle.preload(this.load);
    this.load.image('ground', 'assets/platform.png');
}

function create ()
{
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    var obstacleCreationData = {
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    };

    starsObstacle.create(this.physics, obstacleCreationData, function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    var starsColliderWrapper = new ColliderWrapper(starsObstacle, function (ownercollidedObjectData, triggerColliedObjectData) {
        ownercollidedObjectData.getStats.setMoveSpeedFactor = 12;
        triggerColliedObjectData.getSprite.disableBody(true, true);
    }); 

    var ghostColisionHandler = new GhostColisionHandler(this.physics, starsColliderWrapper);

    var platformsColliderWrapper = new ColliderWrapper(platforms, function () { }); 

    var basicColisionHandler = new BasicColisionHandler(this.physics, platformsColliderWrapper);

    skeleton.create(this.physics, this.anims, [ basicColisionHandler ]);

    necromancer.create(this.physics, this.anims, [ basicColisionHandler, ghostColisionHandler ]);

    var leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT, true, true);
    var rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, true, true);

    skeleton.addInputHandler(new WalkLeftInputHandler(leftKey, skeleton));
    skeleton.addInputHandler(new WalkRightInputHandler(rightKey, skeleton));

    necromancer.addInputHandler(new WalkLeftInputHandler(leftKey, necromancer));
    necromancer.addInputHandler(new WalkRightInputHandler(rightKey, necromancer));

    this.physics.add.collider(starsObstacle.getSprite, platforms);
}

function update ()
{
    skeleton.update();
    necromancer.update();
}