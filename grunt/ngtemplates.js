/*jshint node:true */
module.exports = function(grunt, options) {
  'use strict';

  return {
    all: {
      options: {
        module: 'templates',
        htmlmin: {
          collapseBooleanAttributes:      true,
          collapseWhitespace:             true,
          removeAttributeQuotes:          true,
          removeComments:                 true,
          removeEmptyAttributes:          true,
          removeRedundantAttributes:      true,
          removeScriptTypeAttributes:     true,
          removeStyleLinkTypeAttributes:  true
        },
        bootstrap:  function(module, script) {
          return '/*jscs:disable*/\n/*jshint ignore:start*/\ndefine([\'angular\'], function(angular) { \'use strict\'; return angular.module(\'' + module + '\', []).run(function($templateCache) {\n' + script + '});});\n/* jshint ignore:end */';
        }
      },
      cwd: '<%= src.root %>',
      src: 'partial/**/*.html',
      dest: '<%= src.root %>/js/templates.js'
    }
  };
};
