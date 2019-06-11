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
import { PhaserColisionWatcher } from "../colision/PhaserColisionWatcher";
import { ObstacleStats } from "../stats/ObstacleStats";
import { CharacterStats } from "../stats/CharacterStats";
import { PhaserColision } from "../colision/PhaserColision";
import { PhaserSkillColision } from "../colision/PhaserSkillColision";
import { IDestructibleObjectStats } from "../stats/IDestructibleObjectStats";

export class TestbedScene extends Phaser.Scene {

    private readonly PLATFORM_SPRITE_NAME: string = "platform";

    private assetLoadManager: IAssetLoadManager;
    private necromancer: Necromancer;
    private skeleton: Skeleton;
    private platforms: StaticObstacle;
    private colisionManager: ColisionManager;
    private inputManager: IInputManager;
    private necromancerBasicAttackSkill: ISkill;
    private skeletonBasicAttackSkill: ISkill;
    private debugText: Phaser.GameObjects.Text;

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
        const phaserSpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE, true, false);
        const keyRightWrapper = new PhaserKey(phaserRightKey);
        const keyLeftWrapper = new PhaserKey(phaserLeftKey);
        const keySpaceWrapper = new PhaserKey(phaserSpaceKey);

        this.inputManager.addInputToHandle(keyRightWrapper, () => {
            this.necromancer.move(CharacterMovingDirection.RIGHT);
            this.skeleton.move(CharacterMovingDirection.RIGHT);
            return true;
        });
        this.inputManager.addInputToHandle(keyLeftWrapper, () => {
            this.necromancer.move(CharacterMovingDirection.LEFT);
            this.skeleton.move(CharacterMovingDirection.LEFT);
            return true;
        });
        this.inputManager.addInputToHandle(keySpaceWrapper, () => {
            this.necromancer.attack();
            this.skeleton.attack();
            return true;
        });

        this.inputManager.addWhenNoInputDetected(() => {
            this.necromancer.idle();
            this.skeleton.idle();
        });

        this.necromancerBasicAttackSkill = new MeleeAttackSkill(1);
        this.skeletonBasicAttackSkill = new MeleeAttackSkill(1);
        this.assetLoadManager = new AssetLoadManager();

        this.necromancer.setBasicAttackSkill(this.necromancerBasicAttackSkill);
        this.skeleton.setBasicAttackSkill(this.skeletonBasicAttackSkill);

        this.assetLoadManager.addAsset(this.necromancer);
        this.assetLoadManager.addAsset(this.skeleton);
        this.assetLoadManager.addAsset(this.platforms);
        this.assetLoadManager.addAsset(this.necromancerBasicAttackSkill);
        this.assetLoadManager.addAsset(this.skeletonBasicAttackSkill);
    }

    public preload(): void {
        this.assetLoadManager.load(this.load);
        this.load.image("sky", "assets/sky.png");
    }

    public create(): void {
        this.add.image(400, 300, "sky");
        this.necromancer.create(this);
        this.skeleton.create(this);
        this.platforms.create(this, (platform) => {
            platform.create(400, 568, this.PLATFORM_SPRITE_NAME).setScale(2).refreshBody();
            platform.create(600, 400, this.PLATFORM_SPRITE_NAME);
            platform.create(50, 250, this.PLATFORM_SPRITE_NAME);
            platform.create(750, 220, this.PLATFORM_SPRITE_NAME);
        });
        const phaserColisionWatcher = new PhaserColisionWatcher(this.physics);
        this.colisionManager = new ColisionManager(phaserColisionWatcher);

        const colisionNecromancerAndPlatforms = new PhaserColision(
            this.necromancer,
            this.platforms,
            this.necromancer,
            null);
        const colisionSkeletonAndPlatforms = new PhaserColision(this.skeleton, this.platforms, this.skeleton, null);
        const colisionSkeletonAndNecromancerMeleeSkill = new PhaserSkillColision(
            this.necromancerBasicAttackSkill,
            this.skeleton,
            this.necromancerBasicAttackSkill);

        this.colisionManager.addColisionToHandle<CharacterStats, ObstacleStats>(
            colisionNecromancerAndPlatforms,
            ColisionType.COLLIDE);
        this.colisionManager.addColisionToHandle<CharacterStats, ObstacleStats>(
            colisionSkeletonAndPlatforms,
            ColisionType.COLLIDE);
        this.colisionManager.addColisionToHandle<IDestructibleObjectStats, IDestructibleObjectStats>(
            colisionSkeletonAndNecromancerMeleeSkill,
            ColisionType.OVERLAP);

        this.debugText = this.add.text(10, 10, "Debug", { color: "#00ff00" });
    }

    public update(): void {
        this.necromancer.update();
        this.skeleton.update();
        this.inputManager.update();

        const debug = [
            `Necromancer Width: ${this.necromancer.getSpriteColliderWrapper().getGameObject().width}`,
            `Necromancer Height: ${this.necromancer.getSpriteColliderWrapper().getGameObject().height}`,
            `Necromancer X: ${this.necromancer.getSpriteColliderWrapper().getGameObject().x}`,
            `Necromancer Y: ${this.necromancer.getSpriteColliderWrapper().getGameObject().y}`,
            `Skeleton Width: ${this.skeleton.getSpriteColliderWrapper().getGameObject().width}`,
            `Skeleton Height: ${this.skeleton.getSpriteColliderWrapper().getGameObject().height}`,
            `Skeleton X: ${this.skeleton.getSpriteColliderWrapper().getGameObject().x}`,
            `Skeleton Y: ${this.skeleton.getSpriteColliderWrapper().getGameObject().y}`,
        ];
        this.debugText.setText(debug);
    }

}
