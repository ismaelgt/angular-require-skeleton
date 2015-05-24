(function() {
  'use strict';

  var testFiles = [];

  if (window.__karma__) {
    var pathToModule = function(path) {
      return path.replace(/^\/base\/src\/js\//, '').replace(/\.js$/, '');
    };

    Object.keys(window.__karma__.files).forEach(function(file) {
      if (/spec\.js$/.test(file)) {
        // Normalize paths to RequireJS module names.
        testFiles.push(pathToModule(file));
      }
    });
  }

  require.config({
    paths: {
      angular: '../bower_components/angular/angular',
      angularResource: '../bower_components/angular-resource/angular-resource',
      angularMocks: '../bower_components/angular-mocks/angular-mocks',
      uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
      jQuery: '../bower_components/jquery/dist/jquery',
      templates: 'templates',
      controller1: 'controllers/controller1',
      controller2: 'controllers/controller2'
    },
    shim: {
      angular : {
        deps: ['jQuery'],
        exports: 'angular'
      },
      angularResource: ['angular'],
      angularMocks: {
        deps: ['angular'],
        exports: 'angular.mock'
      },
      uiRouter: ['angular']
    },
    priority: ['angular'],
  });

  require.config({
    deps: window.__karma__ ? testFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/src/js/' : '/js/'
  });

  if (!window.__karma__) {
    require(['bootstrap']);
  }

})();
