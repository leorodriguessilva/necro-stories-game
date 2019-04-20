class NotImplementedException {

    constructor() {
        this.message = 'This function is not implemented, implement in its owner, or the children must implement';
        this.name = 'NotImplementedException';
    }
}

module.exports = NotImplementedException;