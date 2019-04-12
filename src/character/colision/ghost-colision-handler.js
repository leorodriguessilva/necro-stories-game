class GhostColisionHandler extends ColisionHandler {

    constructor (physics, colliderWrapper, statsHandlerCallback) {
        super(physics, colliderWrapper);
        this.statsHandlerCallback = statsHandlerCallback;
        this.isOn = true;
    }

    handle () { 
        var stats = this.character.getStats;
        this.statsHandlerCallback(stats);
    }

    addColliderToHandle (character) {
        this.character = character;
        this.physics.add.overlap(
            this.character.getSprite, 
            this.colliderWrapper.getCollider, 
            this.handle, 
            null, 
            this);
    } 

    isOn () {
        return this.isOn;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }
}