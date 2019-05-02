import { ColliderType } from "./ColliderType";

export class SpriteColliderDataWrapper {

    private locationX: number;
    private locationY: number;
    private physics: Phaser.Physics.Arcade.ArcadePhysics;
    private colliderName: string;
    private physicsGroupConfig: PhysicsGroupConfig;
    private colliderType: ColliderType;

    constructor(locationX: number, 
        locationY: number, 
        physics: Phaser.Physics.Arcade.ArcadePhysics, 
        colliderName: string, 
        physicsGroupConfig: PhysicsGroupConfig, 
        colliderType: ColliderType) {
        this.locationX = locationX;
        this.locationY = locationY;
        this.physics = physics;
        this.colliderName = colliderName;
        this.physicsGroupConfig = physicsGroupConfig;
        this.colliderType = colliderType;
    }

    public addStaticGroup(): Phaser.Physics.Arcade.StaticGroup {
        return this.physics.add.staticGroup();
    }
    
    public addGroup(): Phaser.Physics.Arcade.Group {
        return this.physics.add.group(this.physicsGroupConfig);
    }
    
    public addSprite(): Phaser.Physics.Arcade.Sprite {
        return this.physics.add.sprite(this.locationX, this.locationY, this.colliderName);
    }

    public isColliderTypeStatic(): boolean {
        return this.colliderType === ColliderType.STATIC;
    }

    public isColliderTypeGroup(): boolean {
        return this.colliderType === ColliderType.GROUP;
    }

    public isColliderTypeSprite(): boolean {
        return this.colliderType === ColliderType.SPRITE;
    }

}