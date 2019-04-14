var dependencyScripts = [
    './src/common/exception/not-implemented-exception.js',
    './src/collider/collided-object-data.js',
    './src/obstacle/basic-obstacle.js',
    './src/obstacle/static-obstacle.js',
    './src/character/character.js',
    './src/character/necromancer.js',
    './src/character/skeleton.js',
    './src/colision/colision-handler.js',
    './src/colision/basic-colision-handler.js',
    './src/colision/ghost-colision-handler.js',
    './src/colision/ghost-magical-colision-handler.js',
    './src/colision/ghost-physical-colision-handler.js',
    './src/colision/magical-harm-colision-handler.js',
    './src/colision/physical-harm-colision-handler.js',
    './src/colision/support-colision-handler.js',
    './src/character/input/input-handler.js',
    './src/character/input/basic-attack-input-handler.js',
    './src/character/input/cast-skill-input-handler.js',
    './src/character/input/movement-input-handler.js',
    './src/character/input/walk-left-input-handler.js',
    './src/character/input/walk-right-input-handler.js',
    './src/collider/collider-wrapper.js',
    './src/config/obstacle-stats-config-json.js',
    './src/config/character-stats-config-json.js',
    './src/stats/stats-type.js',
    './src/stats/stats-factory.js',
    './src/stats/stats-reader-mode.js',
    './src/stats/stats-reader.js',
    './src/stats/obstacle-stats.js',
    './src/stats/obstacle-stats-reader.js',
    './src/stats/character-stats.js',
    './src/stats/character-stats-reader.js',
    './src/testbed-game.js',
]

let existScript = function(src) {
    var scripts = document.getElementsByTagName("script")
    src = src.replace('.', '');
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(src) !== -1) {
            return true;
        }
    }
    return false;
}

dependencyScripts.forEach(function(src) {
    if(existScript(src)){
        return;
    }

    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
});