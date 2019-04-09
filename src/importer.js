var dependencyScripts = [
    './src/character/character.js',
    './src/character/necromancer.js',
    './src/character/skeleton.js',
    './src/character/colision/colision-handler.js',
    './src/character/input/input-handler.js',
    './src/character/input/basic-attack-input-handler.js',
    './src/character/input/cast-skill-input-handler.js',
    './src/character/input/movement-input-handler.js',
    './src/character/input/walk-left-input-handler.js',
    './src/character/input/walk-right-input-handler.js',
    './src/collider/collider-type.js',
    './src/collider/collider-wrapper.js',
    './src/config/stats-config-json.js',
    './src/stats/stats-reader-mode.js',
    './src/stats/stats.js',
    './src/stats/stats-reader.js',
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