class ColisionHandler {

    constructor (character) {
        this.character = character;
    }

    handle () { 
        console.log('Handling colision');
    }

    addColliderToHandle (physics, colliderWrapper) {
        throw new NotImplementedException();
    } 

}