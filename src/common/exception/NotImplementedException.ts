export class NotImplementedException {

    message: string;
    name: string;

    constructor() {
        this.message = 'This function is not implemented, implement in its owner, or the children must implement';
        this.name = 'NotImplementedException';
    }
}