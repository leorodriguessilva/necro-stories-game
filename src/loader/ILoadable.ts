export interface ILoadable {

    preload(loader: Phaser.Loader.LoaderPlugin): void;

    getAssetName(): string;

}
