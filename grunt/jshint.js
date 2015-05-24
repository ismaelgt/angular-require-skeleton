module.exports = function(grunt, options) {
	'use strict';

	return {
		options: {
			jshintrc: '.jshintrc',
			reporter: require('jshint-stylish'),
			force: true
		},
		all: {
			src: [
				'Gruntfile.js',
				'karma.conf.js',
				'<%= src.root %>/js/**/*.js'
			]
		}
	};
};
