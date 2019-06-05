import { EffectType } from "./EffectType";

export interface IEffect {

    getType(): EffectType;

    apply(): number;

    isOverTime(): boolean;

    timesToApply(): number;

    framesBetweenAppl
}
