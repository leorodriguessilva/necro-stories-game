import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";

export class CharacterCastingState extends CharacterState {

    private sprite: Phaser.GameObjects.Sprite;

    public update(): void { }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void { }

    public harm(): void { }

    public attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void { }

    public cast(): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getGameObject();
    }

}
