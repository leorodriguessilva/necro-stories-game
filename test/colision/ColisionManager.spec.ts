import { ColisionManager } from "../../src/colision/ColisionManager";
import { FakeColisionWatcher } from "./mock/FakeColisionWatcher";
import { ColisionType } from "../../src/colision/ColisionType";
import { CharacterStats } from "../../src/stats/CharacterStats";
import { ObstacleStats } from "../../src/stats/ObstacleStats";
import { FakeColision } from "./mock/FakeColision";
import { FakeCharacterCollider } from "./mock/FakeCharacterCollider";
import { FakeObstacleCollider } from "./mock/FakeObstacleCollider";

describe("testing colisions with one or multiply colision detections, to validate callbacks being called", () => {

    const HAS_COLLIDED: boolean = true;
    const NOT_COLLIDED: boolean = false;

    test("when one colision is added to handle, and no colision happen no callback should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeColision = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeColision.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeColision, ColisionType.COLLIDE);
        fakeColisionWatcher.simulateColisions();
        expect(fakeColision.onColisionHappen).toBeCalledTimes(0);
    });
    
    test("when one colision is added to handle, and a colision happen the callback should be called once", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeColision = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeColision.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeColision, ColisionType.COLLIDE);
        fakeColisionWatcher.simulateColisions();
        expect(fakeColision.onColisionHappen).toBeCalled();
    });
    
    test("when one colision and one overlaping is added to handle, and a colision happen the colision callback should be called once", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeColision = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeColision.onColisionHappen = jest.fn();
        const fakeOverlap = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeColision, ColisionType.COLLIDE);
        colisionManager.addColisionToHandle(fakeOverlap, ColisionType.OVERLAP);
        fakeColisionWatcher.simulateColisions();
        expect(fakeColision.onColisionHappen).toBeCalled();
        expect(fakeOverlap.onColisionHappen).toBeCalledTimes(0);
    });
    
    test("when one colision and one overlaping is added to handle, and a overlaping happen the overlap callback should be called once", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeColision = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeColision.onColisionHappen = jest.fn();
        const fakeOverlap = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeColision, ColisionType.COLLIDE);
        colisionManager.addColisionToHandle(fakeOverlap, ColisionType.OVERLAP);
        fakeColisionWatcher.simulateOverlaping();
        expect(fakeOverlap.onColisionHappen).toBeCalled();
        expect(fakeColision.onColisionHappen).toBeCalledTimes(0);
    });
    
    test("when multiply colisions is added to handle, and one colision happen just one colision callback should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeColision1 = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeColision1.onColisionHappen = jest.fn();
        const fakeColision2 = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeColision2.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeColision1, ColisionType.COLLIDE);
        colisionManager.addColisionToHandle(fakeColision2, ColisionType.COLLIDE);
        fakeColisionWatcher.simulateColisions();
        expect(fakeColision1.onColisionHappen).toBeCalled();
        expect(fakeColision2.onColisionHappen).toBeCalledTimes(0);
    });
    
    test("when multiply colisions is added to handle, and all colisions happen all colision callback should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeColision1 = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeColision1.onColisionHappen = jest.fn();
        const fakeColision2 = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeColision2.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeColision1, ColisionType.COLLIDE);
        colisionManager.addColisionToHandle(fakeColision2, ColisionType.COLLIDE);
        fakeColisionWatcher.simulateColisions();
        expect(fakeColision1.onColisionHappen).toBeCalled();
        expect(fakeColision2.onColisionHappen).toBeCalled();
    });
    
    test("when multiply colisions is added to handle, and no colisions happen no callback should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeColision1 = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeColision1.onColisionHappen = jest.fn();
        const fakeColision2 = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeColision2.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeColision1, ColisionType.COLLIDE);
        colisionManager.addColisionToHandle(fakeColision2, ColisionType.COLLIDE);
        fakeColisionWatcher.simulateColisions();
        expect(fakeColision1.onColisionHappen).toBeCalledTimes(0);
        expect(fakeColision2.onColisionHappen).toBeCalledTimes(0);
    });
    
    test("when multiply colisions and one overlaping is added to handle, and an overlap happen just the overlap callback should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeColision1 = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeColision1.onColisionHappen = jest.fn();
        const fakeColision2 = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeColision2.onColisionHappen = jest.fn();
        const fakeOverlap = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeColision1, ColisionType.COLLIDE);
        colisionManager.addColisionToHandle(fakeColision2, ColisionType.COLLIDE);
        colisionManager.addColisionToHandle(fakeOverlap, ColisionType.OVERLAP);
        fakeColisionWatcher.simulateColisions();
        fakeColisionWatcher.simulateOverlaping();
        expect(fakeColision1.onColisionHappen).toBeCalledTimes(0);
        expect(fakeColision2.onColisionHappen).toBeCalledTimes(0);
        expect(fakeOverlap.onColisionHappen).toBeCalled();
    });
    
    test("when multiply overlaping is added to handle, and an overlap happen just the one overlap callback should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeOverlap1 = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap1.onColisionHappen = jest.fn();
        const fakeOverlap2 = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap2.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeOverlap1, ColisionType.OVERLAP);
        colisionManager.addColisionToHandle(fakeOverlap2, ColisionType.OVERLAP);
        fakeColisionWatcher.simulateOverlaping();
        expect(fakeOverlap1.onColisionHappen).toBeCalled();
        expect(fakeOverlap2.onColisionHappen).toBeCalledTimes(0);
    });
    
    test("when multiply overlaping is added to handle, and all overlaps happens just all overlaps callbacks should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeOverlap1 = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap1.onColisionHappen = jest.fn();
        const fakeOverlap2 = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap2.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeOverlap1, ColisionType.OVERLAP);
        colisionManager.addColisionToHandle(fakeOverlap2, ColisionType.OVERLAP);
        fakeColisionWatcher.simulateOverlaping();
        expect(fakeOverlap1.onColisionHappen).toBeCalled();
        expect(fakeOverlap2.onColisionHappen).toBeCalled();
    });

    test("when multiply overlaping and one colision is added to handle, and all overlaps happens just all overlaps callbacks should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeOverlap1 = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap1.onColisionHappen = jest.fn();
        const fakeOverlap2 = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap2.onColisionHappen = jest.fn();
        const fakeColision = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeColision.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeOverlap1, ColisionType.OVERLAP);
        colisionManager.addColisionToHandle(fakeOverlap2, ColisionType.OVERLAP);
        colisionManager.addColisionToHandle(fakeColision, ColisionType.COLLIDE);
        fakeColisionWatcher.simulateColisions();
        fakeColisionWatcher.simulateOverlaping();
        expect(fakeOverlap1.onColisionHappen).toBeCalled();
        expect(fakeOverlap2.onColisionHappen).toBeCalled();
        expect(fakeColision.onColisionHappen).toBeCalledTimes(0);
    });

    test("when multiply overlaping and one colision is added to handle, and one colision happen just one colision callback should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeOverlap1 = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap1.onColisionHappen = jest.fn();
        const fakeOverlap2 = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap2.onColisionHappen = jest.fn();
        const fakeColision = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeColision.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeOverlap1, ColisionType.OVERLAP);
        colisionManager.addColisionToHandle(fakeOverlap2, ColisionType.OVERLAP);
        colisionManager.addColisionToHandle(fakeColision, ColisionType.COLLIDE);
        fakeColisionWatcher.simulateColisions();
        fakeColisionWatcher.simulateOverlaping();
        expect(fakeOverlap1.onColisionHappen).toBeCalledTimes(0);
        expect(fakeOverlap2.onColisionHappen).toBeCalledTimes(0);
        expect(fakeColision.onColisionHappen).toBeCalled();
    });

    test("when multiply overlaping and one colision is added to handle, and one colision and a overlap happens just one colision and overlap callback should be called", () => {
        const characterCollider = new FakeCharacterCollider();
        const obstacleCollider = new FakeObstacleCollider();
        const fakeOverlap1 = new FakeColision<CharacterStats, ObstacleStats>(NOT_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap1.onColisionHappen = jest.fn();
        const fakeOverlap2 = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeOverlap2.onColisionHappen = jest.fn();
        const fakeColision = new FakeColision<CharacterStats, ObstacleStats>(HAS_COLLIDED, characterCollider, obstacleCollider);
        fakeColision.onColisionHappen = jest.fn();
        const fakeColisionWatcher = new FakeColisionWatcher();
        const colisionManager = new ColisionManager(fakeColisionWatcher);
        colisionManager.addColisionToHandle(fakeOverlap1, ColisionType.OVERLAP);
        colisionManager.addColisionToHandle(fakeOverlap2, ColisionType.OVERLAP);
        colisionManager.addColisionToHandle(fakeColision, ColisionType.COLLIDE);
        fakeColisionWatcher.simulateColisions();
        fakeColisionWatcher.simulateOverlaping();
        expect(fakeOverlap1.onColisionHappen).toBeCalledTimes(0);
        expect(fakeOverlap2.onColisionHappen).toBeCalled();
        expect(fakeColision.onColisionHappen).toBeCalled();
    });

});

