const WalkRightInputHandler = require('../../../src/character/input/walk-right-input-handler');

const key = {};
const character = {}

beforeAll(() => {
    key.isDown = false;
    key.keyCode = 0;

    character.getPositionX = function () {
        return character.sprite.positionX;
    };
    character.sprite = {
        positionX: 0,
        isPlayed: false,
        isFlipped: false,
        anims: {
            play: function (alias, isKeepPlaying) {
                character.sprite.isPlayed = true;
            }
        },
        resetFlip: function () {
            character.sprite.isFlipped = false;
        },
        setVelocityX: function (velocity) {
            character.sprite.positionX += velocity;
        }
    };
    character.getSprite = character.sprite;
    character.getStats = {
        get getMoveSpeed() {
            return 10;
        }
    };
    character.isPlayedAnim = function () {
        return character.sprite.isPlayed;
    };
    character.isFlipped = function () {
        return character.sprite.isFlipped;
    };
    character.setVelocityX = function (velocity) {
        character.sprite.setVelocityX(velocity);
    };
});

afterEach(() => {
    key.isDown = false;
    character.sprite.positionX = 0;
    character.sprite.isFlipped = false;
    character.sprite.isPlayed = false;
});

describe('when the choosen input is received, the character should move right', () => {
    test('the X location of the character should be 10 positive', () => {
        let walkRightInputHandler = new WalkRightInputHandler(key, character);

        walkRightInputHandler.handle();

        expect(character.getPositionX()).toBe(10);
    });
    
    test('the animation must be played', () => {
        let walkRightInputHandler = new WalkRightInputHandler(key, character);

        walkRightInputHandler.handle();

        expect(character.isPlayedAnim()).toBeTruthy();
    });
    
    test('the sprite cant be flipped', () => {
        let walkRightInputHandler = new WalkRightInputHandler(key, character);

        walkRightInputHandler.handle();

        expect(character.isFlipped()).toBeFalsy();
    });
});

describe('when the choosen input is not pressed, the character stay was it was', () => {
    test('the X location of the character should be 0', () => {
        expect(character.getPositionX()).toBe(0);
    });
    
    test('the animation must be played', () => {
        expect(character.isPlayedAnim()).toBeFalsy();
    });
    
    test('the sprite cant be flipped', () => {
        expect(character.isFlipped()).toBeFalsy();
    });
});