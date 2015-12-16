/**
 * Created by camel on 2015-10-13.
 */
'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'Gruntfile.js',
                'routs/*.js',
                'app.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        execute: {
            target: {
                src: ['app.js']
            }
        },
        watch: {
            scripts: {
                files: ['app.js'],
                tasks: ['execute']
            }
        }
    });

        // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
};
