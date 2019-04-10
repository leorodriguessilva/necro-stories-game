class CastSkillInputHandler extends InputHandler {

    constructor (key, character, skill) {
        super(key, character);
        this.skill = skill;
    }

    handle () {
        super.handle ();
        this.skill.cast();
    }
}