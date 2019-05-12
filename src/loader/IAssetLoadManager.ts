import { ILoadable } from "./ILoadable";

export interface IAssetLoadManager {

    addAsset(loadable: ILoadable): void;

    load(loader: Phaser.Loader.LoaderPlugin): void;

}
