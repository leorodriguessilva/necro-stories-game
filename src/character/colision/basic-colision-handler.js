class BasicColisionHandler extends ColisionHandler {
    
    handle () { }

    addColliderToHandle (physics, colliderWrapper) {
        physics.add.collider(this.character, colliderWrapper.getCollider);
    } 

}