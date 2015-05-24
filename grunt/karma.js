module.exports = function(grunt, options) {
	'use strict';

	return {
		unit: {
			options: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		}
	};
};
