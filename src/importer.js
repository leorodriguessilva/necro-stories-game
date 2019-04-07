var dependencyScripts = [
    './src/character/character.js',
    './src/character/necromancer.js',
    './src/character/skeleton.js',
    './src/character/colision/colision-handler.js',
    './src/character/input/input-handler.js',
    './src/collider/collider-type.js',
    './src/collider/collider-wrapper.js',
    './src/config/stats-config-json.js',
    './src/stats/stats-reader-mode.js',
    './src/stats/stats.js',
    './src/stats/stats-reader.js',
    './src/testbed-game.js',
]

dependencyScripts.forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
});