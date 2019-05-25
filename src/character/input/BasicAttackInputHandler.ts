import { InputHandler } from "./InputHandler";
import { Character } from "../Character";

export class BasicAttackInputHandler extends InputHandler {

    private readonly ANIM_ATTACK: string = "-attack";
    private animAlias: string;

    constructor(key: Phaser.Input.Keyboard.Key, character: Character) {
        super(key, character);
        this.animAlias = character.getName() + this.ANIM_ATTACK;
    }

    public handle(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        const sprite = spriteColliderWrapper.getGameObject();
        sprite.anims.play(this.animAlias, true);
    }
}
