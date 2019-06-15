import { CharacterState } from "./CharacterState";
import { CharacterMovingDirection } from "./CharacterMovingDirection";
import { CharacterStats } from "../../stats/CharacterStats";

export class CharacterHarmedState extends CharacterState {

    private characterStats: CharacterStats;
    private sprite: Phaser.Physics.Arcade.Sprite;
    private amountOfDamageTaken: number;

    public update(): void {
        this.playHarmAnimation();
        this.checkAnimationEndAndChangeState();
    }

    public idle(): void { }

    public move(movingDirection: CharacterMovingDirection): void { }

    public harm(amountOfDamage: number): void {
        this.amountOfDamageTaken = amountOfDamage;
    }

    public attack(locationX: number, locationY: number, movingDirection: CharacterMovingDirection): void { }

    public cast(): void { }

    protected configureState(): void {
        const spriteColliderWrapper = this.character.getSpriteColliderWrapper();
        this.sprite = spriteColliderWrapper.getGameObject() as Phaser.Physics.Arcade.Sprite;
        this.characterStats = this.character.getStats();
    }

    private playHarmAnimation(): void {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play(this.character.getHarmAnimAlias(), true);
    }

    private checkAnimationEndAndChangeState(): void {
        const animationProgress = this.sprite.anims.getProgress();
        if (animationProgress === 1) {
            this.characterStats.diminishCurrentHealth(this.amountOfDamageTaken);
            this.checkAmountDamageAndChooseNextState();
        }
    }

    private checkAmountDamageAndChooseNextState(): void {
        if (this.isCharacterDead()) {
            this.goToDyingState();
            return;
        }
        this.goToMovingState();
    }

    private isCharacterDead(): boolean {
        const currentHealth = this.characterStats.getCurrentHealth();
        const hasDied = currentHealth <= 0;
        return hasDied;
    }

    private goToDyingState(): void {
        this.stateContext.setCurrentState(this.stateContext.DYING_STATE);
    }

    private goToMovingState(): void {
        this.stateContext.setCurrentState(this.stateContext.MOVING_STATE);
    }
}
