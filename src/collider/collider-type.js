class ColliderType {
    
    /**
     * A basic type collider, meaning walls, ground and bodies.
     *
     * @name ColliderType#BASIC
     * @type {ColliderType.BASIC}
     * @since 0.0.0
     */
    static BASIC = 0;

    /**
     * A collider wich is used to inflict damage, negative stats or both.
     *
     * @name ColliderType#PHYSICAL_HARM
     * @type {ColliderType.PHYSICAL_HARM}
     * @since 0.0.0
     */
    static PHYSICAL_HARM = 1;

    /**
     * A collider wich is used to inflict magical damage, magical negative stats or both.
     *
     * @name ColliderType#MAGICAL_HARM
     * @type {ColliderType.MAGICAL_HARM}
     * @since 0.0.0
     */
    static MAGICAL_HARM = 2;

    /**
     * A collider used to inflict heal, good stats or both.
     *
     * @name ColliderType#SUPPORT
     * @type {ColliderType.SUPPORT}
     * @since 0.0.0
     */
    static SUPPORT = 3;
}