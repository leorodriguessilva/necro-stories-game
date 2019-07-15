export interface IVisualEffect {

    update(): void;

    create(scene: Phaser.Scene): void;

    runAt(locationX: number, locationY: number): void;

    interrupt(): void;

}
