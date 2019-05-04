import "phaser";
import { InputHandler } from './InputHandler';
import { Character } from '../Character';

export class CastSkillInputHandler extends InputHandler {

    skill: any;

    constructor(key: Phaser.Input.Keyboard.Key, character: Character, skill: any) {
        super(key, character);
        this.skill = skill;
    }

    handle(): void {
        this.skill.cast();
    }
}