// Configuration for Copy task(s)
// Copies specified folders/files to specified destination
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('copy', {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeogurt.client %>/',
        dest: '<%= yeogurt.dist %>/client/',
        src: [
          'styles/fonts/**/*.{woff,otf,ttf,eot,svg}',
          'images/**/*.{webp}',
          'templates/**/*.html',
          '!*.js',
          '*.{ico,png,txt}',
          '*.html',
          'bower_components/bootstrap/**/*.{woff,ttf,eot,svg}',
        ]
      }, {
        expand: true,
        cwd: '<%= yeogurt.server %>/templates/',
        dest: '<%= yeogurt.tmp %>',
        src: [
          'index.html'
        ]
      }, {
        expand: true,
        cwd: './',
        dest: '<%= yeogurt.dist %>/',
        src: [
          '<%= yeogurt.server %>/**/*',
          'server.js',
          'package.json'
        ]
      }]
    }
  });

};

module.exports = taskConfig;
