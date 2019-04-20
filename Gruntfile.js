module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        browserify: {
            dist: {
                files: {
                    './dist/<%= pkg.name %>.js': ['./src/**/*.js']
                }
            }
        },
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
                tasks: ['clean', 'browserify'],
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
        }
    });

    grunt.registerTask('test', ['shell:npm_test_jest']);
    grunt.registerTask('build', ['clean', 'browserify']);
    grunt.registerTask('serve', ['connect', 'watch']);
    grunt.registerTask('default', ['test', 'build', 'serve']);
}