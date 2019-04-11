class ColliderWrapper {

    constructor (collider) {
        this.collider = collider;
    }

    destroy () {
        this.collider.destroy();
    }

    update () {
        this.collider.update();
    }

    get getCollider () {
        return this.collider;
    }
}