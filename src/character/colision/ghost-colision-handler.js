class GhostColisionHandler extends ColisionHandler {

    constructor (character, statsHandlerCallback) {
        super(character);
        this.statsHandlerCallback = function (stats) {
            statsHandlerCallback(stats);
        };
    }

    handle () { }

    addColliderToHandle (physics, colliderWrapper) {
        physics.add.overlap(
            this.character, 
            colliderWrapper.getCollider, 
            this.statsHandlerCallback, 
            null, 
            this);
    } 

    
}