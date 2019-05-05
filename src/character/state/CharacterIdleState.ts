import "phaser";
import { CharacterState } from "./CharacterState";

export class CharacterIdleState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;
    private characterName: string;

    public update(): void {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.characterName + "-idle", true);
    }

    public idle(): void { }

    public move(): void {
        this.stateContext.setCurrentState(this.stateContext.MOVING_STATE);
    }

    public harm(): void {
        this.stateContext.setCurrentState(this.stateContext.HARMED_STATE);
    }
    
    public attack(): void { }

    public useSkill(): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getSprite();
        this.characterName = this.character.getName();
    }

}
