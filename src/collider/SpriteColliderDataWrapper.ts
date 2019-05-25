import { ColliderType } from "./ColliderType";

export class SpriteColliderDataWrapper {

    private locationX: number;
    private locationY: number;
    private scene: Phaser.Scene;
    private colliderName: string;
    private physicsGroupConfig: PhysicsGroupConfig;
    private colliderType: ColliderType;
    private spriteFactory: Map<ColliderType, () => Phaser.GameObjects.Sprite | Phaser.GameObjects.Group>;

    constructor(
        locationX: number,
        locationY: number,
        scene: Phaser.Scene,
        colliderName: string,
        physicsGroupConfig: PhysicsGroupConfig,
        colliderType: ColliderType) {
        this.locationX = locationX;
        this.locationY = locationY;
        this.scene = scene;
        this.colliderName = colliderName;
        this.physicsGroupConfig = physicsGroupConfig;
        this.colliderType = colliderType;
        this.spriteFactory = new Map<ColliderType, () => Phaser.GameObjects.Sprite | Phaser.GameObjects.Group>();
        this.populateSpriteFactory();
    }

    public createSprite(): Phaser.GameObjects.Sprite | Phaser.GameObjects.Group {
        const spriteCreate = this.spriteFactory.get(this.colliderType);
        return spriteCreate();
    }

    private populateSpriteFactory(): void {
        this.spriteFactory.set(ColliderType.STATIC, (): Phaser.GameObjects.Group => {
            return this.scene.physics.add.staticGroup();
        });
        this.spriteFactory.set(ColliderType.GROUP, (): Phaser.GameObjects.Group => {
            return this.scene.physics.add.group(this.physicsGroupConfig);
        });
        this.spriteFactory.set(ColliderType.SPRITE, (): Phaser.GameObjects.Sprite => {
            return this.scene.physics.add.sprite(this.locationX, this.locationY, this.colliderName);
        });
        this.spriteFactory.set(ColliderType.STATIC_SPRITE, (): Phaser.GameObjects.Sprite => {
            return this.scene.physics.add.staticSprite(this.locationX, this.locationY, this.colliderName);
        });
    }

}
