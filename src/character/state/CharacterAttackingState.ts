import { CharacterState } from "./CharacterState";

export class CharacterAttackingState extends CharacterState {

    private sprite: Phaser.Physics.Arcade.Sprite;

    public update(): void { }

    public idle(): void { }

    public move(): void { }

    public harm(): void { }

    public attack(): void { }

    public useSkill(): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getSprite();
    }

}
