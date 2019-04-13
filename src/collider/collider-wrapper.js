class ColliderWrapper {

    constructor (collider, callback) {
        this.collider = collider;
        this.callback = callback;
    }

    destroy () {
        this.collider.destroy();
    }

    update () {
        this.collider.update();
    }

    colisionCallback (character) {
        this.callback(character);
    }

    get getCollider () {
        return this.collider;
    }
}