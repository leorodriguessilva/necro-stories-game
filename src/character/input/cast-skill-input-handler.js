import InputHandler from './input-handler.js';

export default class CastSkillInputHandler extends InputHandler {
    
    constructor (sprite, animAlias, skill) {
        this.sprite = sprite;
        this.animAlias = animAlias;
        this.skill = skill;
    }

    handle () {
        this.skill.cast();
    }
}