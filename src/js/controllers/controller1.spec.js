define(['app', 'angularMocks'], function(app) {
  'use strict';

  describe('Controller 1', function() {
    var $rootScope;
    var $controller;
    var ctrl;

    beforeEach(module(app.name));
    beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $controller = $injector.get('$controller');

      ctrl = $controller('Controller1', {
        $scope: $rootScope.$new()
      });

    }));

    it('should be available', function() {
      expect(ctrl).toBeDefined();
    });

    it('should return bar', function() {
      expect(ctrl.foo()).toBe('bar');
    });

  });
});
