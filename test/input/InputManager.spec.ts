import "jest";
import { InputManager } from "../../src/input/InputManager";
import { FakeKey } from "./mock/FakeKey";

test("adding a key and a callback, should execute the callback if the key is down", () => {
    const inputManager = new InputManager();
    const fakeKey = new FakeKey(true);
    const callback = jest.fn();
    inputManager.addInputToHandle(fakeKey, callback);

    inputManager.update();

    expect(callback).toBeCalled();
});

test("adding a key and a callback, should not be executed if no key is down", () => {
    const inputManager = new InputManager();
    const fakeKey = new FakeKey(false);
    const callback = jest.fn();
    inputManager.addInputToHandle(fakeKey, callback);

    inputManager.update();

    expect(callback).toBeCalledTimes(0);
});

test("adding two keys and two callbacks, should execute the callback associated with the key who is down", () => {
    const inputManager = new InputManager();
    const fakeKey1 = new FakeKey(true);
    const fakeKey2 = new FakeKey(false);
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    inputManager.addInputToHandle(fakeKey1, callback1);
    inputManager.addInputToHandle(fakeKey2, callback2);

    inputManager.update();

    expect(callback1).toBeCalled();
    expect(callback2).toBeCalledTimes(0);
});

test("when no key is pressed, a specific callback should be called", () => {
    const inputManager = new InputManager();
    const fakeKey1 = new FakeKey(false);
    const fakeKey2 = new FakeKey(false);
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    inputManager.addInputToHandle(fakeKey1, callback1);
    inputManager.addInputToHandle(fakeKey2, callback2);

    const whenNoInputHandler = jest.fn();
    inputManager.addWhenNoInputDetected(whenNoInputHandler);

    inputManager.update();

    expect(whenNoInputHandler).toBeCalled();
    expect(callback1).toBeCalledTimes(0);
    expect(callback2).toBeCalledTimes(0);
});