const WalkLeftInputHandler = require('../../../src/character/input/walk-left-input-handler');

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
        setFlipX: function (isFlip) {
            character.sprite.isFlipped = isFlip;
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

describe('when the choosen input is received, the character should move left', () => {
    test('the X location of the character should be 10 negative', () => {
        let walkLeftInputHandler = new WalkLeftInputHandler(key, character);

        walkLeftInputHandler.handle();

        expect(character.getPositionX()).toBe(-10);
    });
    
    test('the animation must be played', () => {
        let walkLeftInputHandler = new WalkLeftInputHandler(key, character);

        walkLeftInputHandler.handle();

        expect(character.isPlayedAnim()).toBeTruthy();
    });
    
    test('the sprite must be flipped', () => {
        let walkLeftInputHandler = new WalkLeftInputHandler(key, character);

        walkLeftInputHandler.handle();

        expect(character.isFlipped()).toBeTruthy();
    });
});

describe('when the choosen input is not pressed, the character stay was it was', () => {
    test('the X location of the character should be 0', () => {
        expect(character.getPositionX()).toBe(0);
    });
    
    test('the animation must be played', () => {
        expect(character.isPlayedAnim()).toBeFalsy();
    });
    
    test('the sprite must be flipped', () => {
        expect(character.isFlipped()).toBeFalsy();
    });
});