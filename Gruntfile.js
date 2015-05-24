module.exports = function(grunt) {
  'use strict';

  require('load-grunt-config')(grunt, {
    init: true,
    data: {
      src: {
        root: 'src'
      },
      dev: {
        root: 'dev'
      },
      build: {
        root: 'build'
      }
    },
    loadGruntTasks: {
      pattern: 'grunt-*',
      config: require('./package.json'),
      scope: 'devDependencies'
    }
  });
};
