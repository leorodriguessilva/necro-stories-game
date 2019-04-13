class GhostColisionHandler extends ColisionHandler {

    constructor (physics, colliderWrapper) {
        super(physics, colliderWrapper);
        this.isOn = true;
    }

    handle () { 
        this.colliderWrapper.colisionCallback(this.character);
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