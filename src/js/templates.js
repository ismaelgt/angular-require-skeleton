/*jscs:disable*/
/*jshint ignore:start*/
define(['angular'], function(angular) { 'use strict'; return angular.module('templates', []).run(function($templateCache) {
  'use strict';

  $templateCache.put('partial/view1.html',
    "<div ng-controller=\"Controller1 as ctrl\">Hello world. This is view 1 using <span>{{ ctrl.name }}</span>! <a ui-sref=state2>Go to state 2</a></div>"
  );


  $templateCache.put('partial/view2.html',
    "<div ng-controller=\"Controller2 as ctrl\">Hello again. This is view 2 using <span>{{ ctrl.name }}</span>! <a ui-sref=state1>Go to state 1</a></div>"
  );
});});
/* jshint ignore:end */