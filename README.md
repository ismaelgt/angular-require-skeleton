# AngularJS-RequireJS skeleton [![Build Status](https://travis-ci.org/igonzaleztrujillo/angular-require-skeleton.svg?branch=master)](https://travis-ci.org/igonzaleztrujillo/angular-require-skeleton)

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app
using [RequireJS](http://requirejs.org/) to manage dependencies.

It comes pre-configured to make use of:

* [Bower](http://bower.io/)
* [Grunt](http://gruntjs.com/)
* [Karma](http://karma-runner.github.io/)
* [Sass](http://sass-lang.com/)

The seed app doesn't do much, just shows how to wire two controllers and views together.

## Installing

	npm install

## Building

To build the development evironment just run:

	grunt dev

This will create a `dev` directory with all your app resources.

In order to get your app ready for production:

	grunt build

This will create a `build` directory with all your app resources ready for a production environment.

## Running tests

	grunt test

## Running the server

The project comes with a simple web server. The simplest way to start this server is:

	grunt serve-dev

If you want to preview the production-ready version:

	grunt serve-build

Now browse to the app at http://localhost:8000/