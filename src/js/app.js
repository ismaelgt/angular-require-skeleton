define(['jQuery',
  'angular',
  'angularResource',
  'uiRouter',
  'controller1',
  'controller2',
  'templates'
  ],

  function($,
    angular,
    angularResource,
    uiRouter,
    controller1,
    controller2) {
    'use strict';

    var app = angular.module('app', ['ngResource', 'ui.router', 'templates']);

    app.config(/* @ngInject */ function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('state1', {
          url: '/',
          templateUrl: 'partial/view1.html',
        })
        .state('state2', {
          url: '/state2',
          templateUrl: 'partial/view2.html',
        });
    });

    app.controller('Controller1', controller1);
    app.controller('Controller2', controller2);

    return app;
  }
);
