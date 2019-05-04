import { CharacterStatsReader } from "../../stats/CharacterStatsReader";

export class CharacterCreationData {

    private locationX: number;
    public get LocationX(): number {
        return this.locationX;
    }
    public set LocationX(locationX: number) {
        this.locationX = locationX;
    }

    private locationY: number;
    public get LocationY(): number {
        return this.locationY;
    }
    public set LocationY(locationY: number) {
        this.locationY = locationY;
    }

    private name: string;
    public get Name(): string {
        return this.name;
    }
    public set Name(name: string) {
        this.name = name;
    }

    private characterStatsReader: CharacterStatsReader;
    public get CharacterStatsReader(): CharacterStatsReader {
        return this.characterStatsReader;
    }
    public set CharacterStatsReader(characterStatsReader: CharacterStatsReader) {
        this.characterStatsReader = characterStatsReader;
    }

    private objectId: number;
    public get ObjectId(): number {
        return this.objectId;
    }
    public set ObjectId(objectId: number) {
        this.objectId = objectId;
    }

}
