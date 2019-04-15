class GhostColisionHandler extends ColisionHandler {

    constructor (physics, colliderWrapper) {
        super(physics, colliderWrapper);
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
}