import { CharacterCreationData } from "../character/data/CharacterCreationData";
import { Necromancer } from "../character/Necromancer";
import { Skeleton } from "../character/Skeleton";
import { StaticObstacle } from "../obstacle/StaticObstacle";
import { CharacterStatsReader } from "../stats/CharacterStatsReader";
import { StatsReaderMode } from "../stats/StatsReaderMode";
import { ColisionManager } from "../colision/ColisionManager";
import { ColisionType } from "../colision/ColisionType";
import { IInputManager } from "../input/IInputManager";
import { InputManager } from "../input/InputManager";
import { PhaserKey } from "../input/PhaserKey";
import { CharacterMovingDirection } from "../character/state/CharacterMovingDirection";
import { ISkill } from "../character/skill/ISkill";
import { MeleeAttackSkill } from "../character/skill/MeleeAttackSkill";
import { IAssetLoadManager } from "../loader/IAssetLoadManager";
import { AssetLoadManager } from "../loader/AssetLoadManager";

export class TestbedScene extends Phaser.Scene {

    private readonly PLATFORM_SPRITE_NAME: string = "platform";

    private assetLoadManager: IAssetLoadManager;
    private necromancer: Necromancer;
    private skeleton: Skeleton;
    private platforms: StaticObstacle;
    private colisionManager: ColisionManager;
    private inputManager: IInputManager;
    private basicAttackSkill: ISkill;

    constructor() {
        super({
            key: "TestbedScene",
        });
    }

    public init(params: any): void {
        const characterStatsReader = new CharacterStatsReader(StatsReaderMode.DEBUG_MODE);

        const necromancerCreationData = new CharacterCreationData();
        necromancerCreationData.LocationX = 100;
        necromancerCreationData.LocationY = 300;
        necromancerCreationData.CharacterStatsReader = characterStatsReader;

        const skeletonCreationData = new CharacterCreationData();
        skeletonCreationData.LocationX = 200;
        skeletonCreationData.LocationY = 300;
        skeletonCreationData.CharacterStatsReader = characterStatsReader;

        this.necromancer = new Necromancer(necromancerCreationData);
        this.skeleton = new Skeleton(skeletonCreationData);
        this.platforms = new StaticObstacle(this.PLATFORM_SPRITE_NAME);

        this.inputManager = new InputManager();
        const phaserRightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT, true, true);
        const phaserLeftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT, true, true);
        const phaserSpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE, true, true);
        const keyRightWrapper = new PhaserKey(phaserRightKey);
        const keyLeftWrapper = new PhaserKey(phaserLeftKey);
        const keySpaceWrapper = new PhaserKey(phaserSpaceKey);

        this.inputManager.addInputToHandle(keyRightWrapper, () => {
            this.necromancer.move(CharacterMovingDirection.RIGHT);
            return true;
        });
        this.inputManager.addInputToHandle(keyLeftWrapper, () => {
            this.necromancer.move(CharacterMovingDirection.LEFT);
            return true;
        });
        this.inputManager.addInputToHandle(keySpaceWrapper, () => {
            this.necromancer.attack();
            return true;
        });

        this.basicAttackSkill = new MeleeAttackSkill(1);
        this.assetLoadManager = new AssetLoadManager();

        this.necromancer.setBasicAttackSkill(this.basicAttackSkill);
        this.skeleton.setBasicAttackSkill(this.basicAttackSkill);

        this.assetLoadManager.addAsset(this.necromancer);
        this.assetLoadManager.addAsset(this.skeleton);
        this.assetLoadManager.addAsset(this.platforms);
        this.assetLoadManager.addAsset(this.basicAttackSkill);
    }

    public preload(): void {
        this.assetLoadManager.load(this.load);
        this.load.image("sky", "assets/sky.png");
    }

    public create(): void {
        this.add.image(400, 300, "sky");
        this.necromancer.create(this);
        this.skeleton.create(this);
        this.platforms.create(this.physics, (platform) => {
            platform.create(400, 568, this.PLATFORM_SPRITE_NAME).setScale(2).refreshBody();
            platform.create(600, 400, this.PLATFORM_SPRITE_NAME);
            platform.create(50, 250, this.PLATFORM_SPRITE_NAME);
            platform.create(750, 220, this.PLATFORM_SPRITE_NAME);
        });
        this.colisionManager = new ColisionManager(this.physics);
        this.colisionManager.addColisionToHandle(this.necromancer, this.platforms, null, ColisionType.COLLIDE);
        this.colisionManager.addColisionToHandle(this.skeleton, this.platforms, null, ColisionType.COLLIDE);
    }

    public update(): void {
        this.necromancer.update();
        this.skeleton.update();
        this.inputManager.update();
    }

}
