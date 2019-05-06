import "phaser";
import { CharacterState } from "./CharacterState";

export class CharacterMovingState extends CharacterState {

    public update(): void {
        /*this.hasNoInput = true;
        this.movementInputHandlers.forEach(inputHandler => {
            if (this.handleInput(inputHandler)) {
                this.hasNoInput = false;
                return;
            }
        });

        if (this.hasNoInput) {
            this.stateContext.setCurrentState = this.stateContext.IDLE_STATE;
        }*/
    }

    public idle(): void { }

    public move(): void { }

    public harm(): void {
        this.stateContext.setCurrentState(this.stateContext.HARMED_STATE);
    }

    public attack(): void { }

    public useSkill(): void { }

    protected configureState() {
        /*this.movementInputHandlers = [];

        this.character.inputHandlers.forEach(inputHandler => {
            if (inputHandler instanceof MovementInputHandler) {
                this.movementInputHandlers.push(inputHandler);
            }
        });*/
    }

    private handleInput(inputHandler): boolean {
        if (inputHandler.isKeyDown) {
            inputHandler.handle();
            return true;
        }
        return false;
    }

}
