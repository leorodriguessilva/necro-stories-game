const BasicColisionHandler = require('../../src/colision/basic-colision-handler');
const ColliderWrapper = require('../../src/collider/collider-wrapper');

const physics = {};

beforeAll(() => {
    physics.colisions = [];
    physics.contexts = [];

    physics.add = {
        collider: function (sprite,
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

test('basic colision when detected should execute the callback once', () => {
    let mockCallback = jest.fn();
    let colliderWrapper = new ColliderWrapper({}, mockCallback);
    let basicColisionHandler = new BasicColisionHandler(physics, colliderWrapper);

    let mockedCharacter = {
        get getSprite() {
            return {};
        }
    };

    basicColisionHandler.addColliderToHandle(mockedCharacter);

    physics.update(true);

    expect(mockCallback.mock.calls.length).toBe(1);
});

test('when no basic colision detected no callback should be called', () => {
    let mockCallback = jest.fn();
    let colliderWrapper = new ColliderWrapper({}, mockCallback);
    let basicColisionHandler = new BasicColisionHandler(physics, colliderWrapper);

    let mockedCharacter = {
        get getSprite() {
            return {};
        }
    };

    basicColisionHandler.addColliderToHandle(mockedCharacter);

    physics.update(false);

    expect(mockCallback.mock.calls.length).toBe(0);
});