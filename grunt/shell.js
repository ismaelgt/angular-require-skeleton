module.exports = function(grunt, options) {
  'use strict';

  var conf = {
      'install': {
          command: [
              'npm install',
              'bower install'
          ].join('&&')
      },
      'serve-dev': {
        command: 'http-server -a localhost -p 8000 -c-1 <%= dev.root %>'
      },
      'serve-build': {
        command: 'http-server -a localhost -p 8000 -c-1 <%= build.root %>'
    }
  };

  return conf;
};
