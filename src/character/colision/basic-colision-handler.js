class BasicColisionHandler extends ColisionHandler {
    
    handle (ownercollidedObjectData, triggerColliedObjectData) { }

    addColliderToHandle (character) {
        this.physics.add.collider(character.getSprite, this.colliderWrapper.getCollider);
    } 

}