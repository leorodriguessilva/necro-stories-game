import "phaser";
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

export class TestbedScene extends Phaser.Scene {

    private readonly PLATFORM_SPRITE_NAME: string = "platform";

    private necromancer: Necromancer;
    private skeleton: Skeleton;
    private platforms: StaticObstacle;
    private colisionManager: ColisionManager;
    private inputManager: IInputManager;

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
        const keyRightWrapper = new PhaserKey(phaserRightKey);
        const keyLeftWrapper = new PhaserKey(phaserLeftKey);

        this.inputManager.addInputToHandle(keyRightWrapper, () => {
            this.necromancer.move(CharacterMovingDirection.RIGHT);
            return true;
        });
        this.inputManager.addInputToHandle(keyLeftWrapper, () => {
            this.necromancer.move(CharacterMovingDirection.LEFT);
            return true;
        });

    }

    public preload(): void {
        this.necromancer.preload(this.load);
        this.skeleton.preload(this.load);
        this.platforms.preload(this.load);
    }

    public create(): void {
        this.necromancer.create(this.physics, this.anims);
        this.skeleton.create(this.physics, this.anims);
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
