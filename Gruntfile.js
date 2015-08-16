module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        includereplace: {
            main: {
                src: 'tpl/*.html',
                dest: 'index.html'
            }
        },
        concat: {
            main: {
                src: [
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/modernizr/modernizr.js',
                'bower_components/foundation/js/foundation/foundation.js',
                'bower_components/foundation/js/foundation/foundation.clearing.js',
                'bower_components/foundation/js/foundation/foundation.magellan.js',
                'bower_components/foundation/js/foundation/foundation.topbar.js',
                'bower_components/foundation/js/foundation/foundation.reveal.js',
                'bower_components/foundation/js/foundation/foundation.abide.js',
                'bower_components/foundation/js/foundation/vendor/placeholder.js',
                'bower_components/smooth-scroll/dist/js/smooth-scroll.js',
                'client/js/lib/device.min.js',
                'client/js/index.js'
                ],
                dest: 'build/js/concat/index.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'build/js/index.min.js': '<%= concat.main.dest %>'
                }
            }
        },
        compass: {
            compile: {
                options: {
                    config: 'grunt-compass.rb'
                }
            }
        },
        watch: {
            html: {
                files: [
                'tpl/**/*.html'
                ],
                tasks: 'includereplace'
            },
            css: {
                files: 'client/styles/scss/**/*.scss',
                //files: 'client/styles/scss*//**//*.scss',
                tasks: 'compass:compile'
            },
            js: {
                files: 'client/js/**/*.js',
                tasks: ['concat']
            }
        }
    });


    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['includereplace', 'concat', 'uglify']);
    grunt.registerTask('html', ['includereplace']);
    grunt.registerTask('compile', ['compass']);
};