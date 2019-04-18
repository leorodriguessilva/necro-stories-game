module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', './src/**/*.js', './test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'concat']
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['./src/**/*.js'],
                dest: './dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    './dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        run: {
            npm_test_jest: {
                cmd: 'npm',
                args: [
                    'run',
                    'test-jest',
                    '--silent'
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: ".",
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['jshint', 'concat', 'connect', 'watch']);
    grunt.registerTask('dev', ['jshint', 'concat', 'run:npm_test_jest', 'connect', 'watch']);
    grunt.registerTask('test', ['jshint', 'concat', 'run:npm_test_jest']);
    grunt.registerTask('build', ['jshint', 'concat', 'run:npm_test_jest', 'uglify', 'connect']);
};