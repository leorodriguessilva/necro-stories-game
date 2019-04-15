class PhysicalHarmColisionHandler extends BasicColisionHandler {
    
    handle (ownerCollidedObjectData, triggerCollidedObjectData) { 
        super.handle(ownerCollidedObjectData, triggerCollidedObjectData);
        this.character.setState = CharacterState.HARMED;
    }

}