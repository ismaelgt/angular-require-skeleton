(function() {
  'use strict';

  module.exports = function(config) {
    config.set({
      files : [
        {
          pattern: 'src/bower_components/angular/angular.js',
          included: false
        },
        {
          pattern: 'src/bower_components/angular-*/angular-*.js',
          included: false
        },
        {
          pattern: 'src/bower_components/angular-*/release/angular-*.js',
          included: false
        },
        {
          pattern: 'src/bower_components/angular-*/build/angular-*.js',
          included: false
        },
        {
          pattern: 'src/bower_components/jquery/dist/jquery.js',
          included: false
        },
        {
          pattern: 'src/js/**/**/*.spec.js',
          included: false
        },
        {
          pattern: 'src/js/app.js',
          included: false
        },
        {
          pattern: 'src/partial/**/*.html',
          included: false
        },
        {
          pattern: 'src/js/templates.js',
          included: false
        },
        {
          pattern: 'src/js/controllers/*.js',
          included: false
        },
        'src/js/require-config.js'
      ],

      frameworks: ['jasmine', 'requirejs'],

      reporters: ['mocha', 'coverage'],

      preprocessors: {
        'src/js/**/!(require-config|*spec).js': ['coverage']
      },

      coverageReporter: {
        type: 'text',
        dir: '../coverage/'
      },

      browsers : ['PhantomJS'],

      plugins : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-requirejs',
        'karma-mocha-reporter',
        'karma-coverage'
      ]
    });
  };
})();
