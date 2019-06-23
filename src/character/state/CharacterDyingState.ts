import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";

export class CharacterDyingState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;

    public update(): void {
        this.playDyingAnimation();
    }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void { }

    public harm(amountOfDamage: number): void { }

    public attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void { }

    public useSkill(id: number, movingDirection: CharacterMovingDirection): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getGameObject() as Phaser.Physics.Arcade.Sprite;
    }

    private playDyingAnimation(): void {
        this.sprite.anims.play(this.character.getDeadAnimAlias(), true);
        const animationProgress = this.sprite.anims.getProgress();

        if (animationProgress === 1) {
            this.inactivateSprite();
        }
    }

    private inactivateSprite(): void {
        this.sprite.disableBody(true, true);
    }

}
