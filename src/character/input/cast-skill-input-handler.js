class CastSkillInputHandler extends InputHandler {
    
    constructor (key, character, animAlias, skill) {
        super(key, character);
        this.animAlias = animAlias;
        this.skill = skill;
    }

    handle () {
        this.skill.cast();
    }
}