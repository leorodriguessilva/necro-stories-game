import "phaser";
import { CollidedObjectData } from "../collider/CollidedObjectData";
import { ColliderType } from "../collider/ColliderType";
import { CharacterStats } from "../stats/CharacterStats";
import { CharacterCreationData } from "./data/CharacterCreationData";
import { CharacterStateContext } from "./state/CharacterStateContext";
import { SpriteColliderWrapper } from "../collider/SpriteColliderWrapper";
import { SpriteColliderDataWrapper } from "../collider/SpriteColliderDataWrapper";
import { ISpriteColliderWrapper } from "../collider/ISpriteColliderWrapper";
import { CharacterMovingDirection } from "./state/CharacterMovingDirection";

export abstract class Character extends CollidedObjectData<CharacterStats> {

    private locationX: number;
    private locationY: number;
    private name: string;
    private stats: CharacterStats;
    private stateContext: CharacterStateContext;
    private spriteColliderWrapper: ISpriteColliderWrapper;

    constructor(characterCreationData: CharacterCreationData) {
        super(characterCreationData.ObjectId);
        this.locationX = characterCreationData.LocationX;
        this.locationY = characterCreationData.LocationY;
        this.name = characterCreationData.Name;
        const characterStatsReader = characterCreationData.CharacterStatsReader;
        this.stats = characterStatsReader.generateStats(this.getName());
    }

    public abstract preload(loader: Phaser.Loader.LoaderPlugin): void;

    public create(physics: Phaser.Physics.Arcade.ArcadePhysics, anims: Phaser.Animations.AnimationManager): void {
        const spriteColliderDataWrapper = new SpriteColliderDataWrapper(
            this.locationX,
            this.locationY,
            physics,
            this.getName(),
            null,
            this.getColliderType());
        this.spriteColliderWrapper = new SpriteColliderWrapper(spriteColliderDataWrapper);
        this.stateContext = new CharacterStateContext(this);
    }

    public move(movingDirection: CharacterMovingDirection) {
        this.stateContext.move(movingDirection);
    }

    public harm() {
        this.stateContext.harm();
    }

    public update() {
        this.stateContext.update();
    }

    public destroy() {
        this.spriteColliderWrapper.destroy();
    }

    public getName(): string {
        return this.name;
    }

    public getSpriteColliderWrapper(): ISpriteColliderWrapper {
        return this.spriteColliderWrapper;
    }

    public getStats(): CharacterStats {
        return this.stats;
    }

    public getColliderType(): ColliderType {
        return ColliderType.SPRITE;
    }

}
