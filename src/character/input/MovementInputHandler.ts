import "phaser";
import { InputHandler } from "./InputHandler";
import { Character } from "../Character";

export abstract class MovementInputHandler extends InputHandler {

    private readonly ANIM_WALK: string = "-walk";
    private animAlias: string;

    constructor(key: Phaser.Input.Keyboard.Key, character: Character) {
        super(key, character);
        this.animAlias = character.getName() + this.ANIM_WALK;
    }

    public handle(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        const sprite = spriteColliderWrapper.getSprite();
        const stats = this.character.getStats();
        this.flipSprite(sprite);
        sprite.setVelocityX(stats.getMoveSpeed() * this.getTurnMoveFactor());
        sprite.anims.play(this.animAlias, true);
    }

    protected abstract flipSprite(sprite: Phaser.Physics.Arcade.Sprite): void;

    protected abstract getTurnMoveFactor(): number;

}
