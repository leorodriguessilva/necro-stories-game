import { CollidedObjectData } from "../collider/CollidedObjectData";
import { ColliderType } from "../collider/ColliderType";
import { CharacterStats } from "../stats/CharacterStats";
import { CharacterCreationData } from "./data/CharacterCreationData";
import { CharacterStateContext } from "./state/CharacterStateContext";
import { SpriteColliderWrapper } from "../collider/SpriteColliderWrapper";
import { SpriteColliderDataWrapper } from "../collider/SpriteColliderDataWrapper";
import { ISpriteColliderWrapper } from "../collider/ISpriteColliderWrapper";
import { CharacterMovingDirection } from "./state/CharacterMovingDirection";
import { ISkill } from "./skill/ISkill";

export abstract class Character extends CollidedObjectData<CharacterStats> {

    private locationX: number;
    private locationY: number;
    private name: string;
    private stats: CharacterStats;
    private stateContext: CharacterStateContext;
    private spriteColliderWrapper: ISpriteColliderWrapper;
    private basicAttackSkill: ISkill;
    private skills: ISkill[];

    constructor(characterCreationData: CharacterCreationData) {
        super(characterCreationData.ObjectId);
        this.locationX = characterCreationData.LocationX;
        this.locationY = characterCreationData.LocationY;
        this.name = characterCreationData.Name;
        const characterStatsReader = characterCreationData.CharacterStatsReader;
        this.stats = characterStatsReader.generateStats(this.getName());
        this.skills = new Array();
    }

    public abstract preload(loader: Phaser.Loader.LoaderPlugin): void;

    public create(scene: Phaser.Scene): void {
        this.basicAttackSkill.create(scene);
        const spriteColliderDataWrapper = new SpriteColliderDataWrapper(
            this.locationX,
            this.locationY,
            scene,
            this.getName(),
            null,
            this.getColliderType());
        this.spriteColliderWrapper = new SpriteColliderWrapper(spriteColliderDataWrapper);
        this.stateContext = new CharacterStateContext(this);
        this.createSkills(scene);
        this.getSpriteColliderWrapper().setCollideWorldBounds(true);
        this.configureAnimation(scene.anims);
    }

    public idle(): void {
        this.stateContext.idle();
    }

    public move(movingDirection: CharacterMovingDirection): void {
        this.stateContext.move(movingDirection);
    }

    public attack(): void {
        this.stateContext.attack(
            this.spriteColliderWrapper.getX(),
            this.spriteColliderWrapper.getY());
    }

    public beingHitted(amountOfDamage: number): void {
        this.stateContext.harm(amountOfDamage);
    }

    public update(): void {
        this.stateContext.update();
    }

    public destroy() {
        this.spriteColliderWrapper.destroy();
    }

    public getName(): string {
        return this.name;
    }

    public getSpriteColliderWrapper(): ISpriteColliderWrapper {
        return this.spriteColliderWrapper;
    }

    public getStats(): CharacterStats {
        return this.stats;
    }

    public getColliderType(): ColliderType {
        return ColliderType.SPRITE;
    }

    public getBasicAttackSkill(): ISkill {
        return this.basicAttackSkill;
    }

    public setBasicAttackSkill(basicAttackSkill: ISkill): void {
        this.basicAttackSkill = basicAttackSkill;
        this.basicAttackSkill.setOwner(this);
    }

    public getDeadAnimAlias(): string {
        return `${this.getName()}-dead`;
    }

    public getHarmAnimAlias(): string {
        return `${this.getName()}-harm`;
    }

    public getWalkAnimAlias(): string {
        return `${this.getName()}-walk`;
    }

    public getAttackAnimAlias(): string {
        return `${this.getName()}-attack`;
    }

    public getIdleAnimAlias(): string {
        return `${this.getName()}-idle`;
    }

    public getCastingAnimAlias(): string {
        return `${this.getName()}-cast`;
    }

    public addSkill(skill: ISkill): void {
        this.skills.push(skill);
        skill.setOwner(this);
    }

    public useSkill(id: number): void {
        this.stateContext.useSkill(id);
    }

    protected abstract configureAnimation(anims: Phaser.Animations.AnimationManager): void;

    private createSkills(scene: Phaser.Scene) {
        this.skills.forEach((s) => {
             s.create(scene);
             this.stateContext.addSkill(s);
        });
    }

}
