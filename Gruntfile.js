module.exports = function (grunt) {

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
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'browserify', 'connect', 'watch']);
}