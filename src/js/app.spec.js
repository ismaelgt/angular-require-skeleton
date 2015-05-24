(function() {
  'use strict';

  define(['angular', 'angularMocks'], function(angular, app) {
    describe('App', function() {
      beforeEach(module(app.name));

      it('should be available', function() {
        expect(app).toBeDefined();
      });

    });
  });
})();
