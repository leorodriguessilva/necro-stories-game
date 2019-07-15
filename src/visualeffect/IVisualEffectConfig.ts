export interface IVisualEffectConfig {

    getFrameConfig(): Phaser.Loader.FileTypes.ImageFrameConfig;

    getRepeat(): number;

    getFrameRate(): number;
}
