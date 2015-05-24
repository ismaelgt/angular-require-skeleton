define([],
  function() {
    'use strict';

    /* @ngInject */
    function Controller1() {
      var self = this;

      self.name = 'Controller 1';

      self.foo = function() {
        return 'bar';
      };
    }

    return Controller1;
  }
);
