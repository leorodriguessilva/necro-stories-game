var ColisionHandler = require('./colision-handler');

class BasicColisionHandler extends ColisionHandler {

    addColliderToHandle(character) {
        this.character = character;
        this.physics.add.collider(
            this.character.getSprite,
            this.colliderWrapper.getCollider,
            this.handle,
            null,
            this);
    }

}

module.exports = BasicColisionHandler;