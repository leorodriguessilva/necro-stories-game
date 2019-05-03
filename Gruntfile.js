module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: ['./dist'],
        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: 'localhost',
                    livereload: true,
                    open: 'http://localhost:3000/testbed.html'
                }
            }
        },
        watch: {
            scripts: {
                files: ['Gruntfile.js', './src/**/*.js'],
                tasks: ['clean', 'ts'],
                options: {
                    interrupt: true,
                    spawn: true,
                    debounceDelay: 250,
                },
            },
        },
        shell: {
            npm_test_jest: {
                command: 'npm run test',
            }
        },
        ts: {
            default: {
                options: {
                    moduleResolution: "node",
                    module: "system",
                    noImplicitAny: true,
                    removeComments: true,
                    preserveConstEnums: true,
                    sourceMap: true,
                    lib: ["es6", "es7", "dom", "scripthost"],
                    target: "es5",
                },
                out: "./dist/tsc.js",
                src: [
                    "./src/*",
                    "./lib/**/*.ts",
                ]
            }
        }
    });

    grunt.registerTask('test', ['shell:npm_test_jest']);
    grunt.registerTask('build', ['clean', 'ts']);
    grunt.registerTask('serve', ['connect', 'watch']);
    grunt.registerTask('default', ['test', 'build', 'serve']);
}