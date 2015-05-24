module.exports = function(grunt, options) {
	'use strict';

	var conf = {
		dev: {
			files: [
				{ '<%= dev.root %>/bower_components' : '<%= src.root %>/bower_components'},
				{ '<%= dev.root %>/js' : '<%= src.root %>/js'},
				{ '<%= dev.root %>/images' : '<%= src.root %>/images'}
			]
		},

		build: {
			files: [
				{ '<%= build.root %>/images' : '<%= src.root %>/images'}
			]
		}
	};

	return conf;
};
