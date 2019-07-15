import { IVisualEffectConfig } from "./IVisualEffectConfig";

export class VisualEffectConfig implements IVisualEffectConfig {

    private repeat: number;
    private frameRate: number;
    private frameConfig: Phaser.Loader.FileTypes.ImageFrameConfig;

    constructor(repeat: number, frameRate: number, frameConfig: Phaser.Loader.FileTypes.ImageFrameConfig) {
        this.repeat = repeat;
        this.frameRate = frameRate;
        this.frameConfig = frameConfig;
    }

    public getFrameConfig(): Phaser.Loader.FileTypes.ImageFrameConfig {
        return this.frameConfig;
    }

    public getRepeat(): number {
        return this.repeat;
    }

    public getFrameRate(): number {
        return this.frameRate;
    }

}
