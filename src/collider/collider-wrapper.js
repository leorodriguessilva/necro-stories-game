class ColliderWrapper {

    constructor (colliderType, collider) {
        this.colliderType = colliderType;
        this.collider = collider;
    }

    destroy () {
        this.collider.destroy();
    }

    update () {
        this.collider.update();
    }
}