import { IAssetLoadManager } from "./IAssetLoadManager";
import { ILoadable } from "./ILoadable";

export class AssetLoadManager implements IAssetLoadManager {

    private readonly gameObjectsToLoad: Map<string, ILoadable>;

    constructor() {
        this.gameObjectsToLoad = new Map<string, ILoadable>();
    }

    public addAsset(loadable: ILoadable): void {
        if (this.gameObjectsToLoad.has(loadable.getAssetName())) {
            return;
        }
        this.gameObjectsToLoad.set(loadable.getAssetName(), loadable);
    }

    public load(loader: Phaser.Loader.LoaderPlugin): void {
        this.gameObjectsToLoad.forEach((loadable: ILoadable) => {
            loadable.preload(loader);
        });
    }

}
