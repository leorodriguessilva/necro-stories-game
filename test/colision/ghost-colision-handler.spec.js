const GhostColisionHandler = require('../../src/colision/ghost-colision-handler');
const ColliderWrapper = require('../../src/collider/collider-wrapper');

const physics = {};

beforeAll(() => {
    physics.colisions = [];
    physics.contexts = [];

    physics.add = {
        overlap: function (sprite,
            collider,
            handle,
            isEnabled,
            context) {
            physics.contexts.push(context);
            physics.colisions[context] = handle;
        }
    };

    physics.update = function (isExecuteColisions) {
        if (isExecuteColisions) {
            physics.contexts.forEach((context) => {
                physics.colisions[context].call(context);
            });
        }
    };

    return physics;
});

afterEach(() => {
    physics.colisions = [];
});

test('ghost colision when detected should execute the callback once', () => {
    let mockCallback = jest.fn();
    let colliderWrapper = new ColliderWrapper({}, mockCallback);
    let ghostColisionHandler = new GhostColisionHandler(physics, colliderWrapper);

    let mockedCharacter = {
        get getSprite() {
            return {};
        }
    };

    ghostColisionHandler.addColliderToHandle(mockedCharacter);

    physics.update(true);

    expect(mockCallback.mock.calls.length).toBe(1);
});

test('same ghost colision when detected for two objects should execute the callback twice', () => {
    let mockCallback = jest.fn();
    let colliderWrapper = new ColliderWrapper({}, mockCallback);
    let ghostColisionHandler = new GhostColisionHandler(physics, colliderWrapper);

    let mockedCharacter1 = {
        get getSprite() {
            return {};
        }
    };

    let mockedCharacter2 = {
        get getSprite() {
            return {};
        }
    };

    ghostColisionHandler.addColliderToHandle(mockedCharacter1);
    ghostColisionHandler.addColliderToHandle(mockedCharacter2);

    physics.update(true);

    expect(mockCallback.mock.calls.length).toBe(2);
});

test('when no ghost colision detected no callback should be called', () => {
    let mockCallback = jest.fn();
    let colliderWrapper = new ColliderWrapper({}, mockCallback);
    let ghostColisionHandler = new GhostColisionHandler(physics, colliderWrapper);

    let mockedCharacter = {
        get getSprite() {
            return {};
        }
    };

    ghostColisionHandler.addColliderToHandle(mockedCharacter);

    physics.update(false);

    expect(mockCallback.mock.calls.length).toBe(0);
});