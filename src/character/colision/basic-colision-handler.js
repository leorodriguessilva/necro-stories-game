class BasicColisionHandler extends ColisionHandler {
    
    handle () { }

    addColliderToHandle (character) {
        this.physics.add.collider(character.getSprite, this.colliderWrapper.getCollider);
    } 

}