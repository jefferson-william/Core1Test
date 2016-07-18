/// <reference path="../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../Lib/DefinitelyTyped/Typed.d.ts" />

define([
	'angularAMD',
	'App',
], (angularAMD, app) => {
	var controller;

	controller = angularAMD.controller('HeaderController', () => {
		console.log('HeaderController');
	});

	angularAMD.processQueue();

	console.log(1);

	return controller;
});
