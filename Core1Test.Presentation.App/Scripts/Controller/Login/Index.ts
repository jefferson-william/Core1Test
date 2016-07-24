/// <reference path="../../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../../Lib/DefinitelyTyped/Login/Index.d.ts" />

define([
	'App',
	'IdentificacaoService',
], (app: angular.IModule, IdentificacaoService: IIdentificacaoClass) => {

	class LoginIndexController implements ILoginIndexController {
		public LoginModel: ILoginModel = { Email: 'j@e.com', Senha: 'j' };

		public Submit(LoginModel: ILoginModel, LoginForm: angular.IFormController) {
			console.log(LoginModel, LoginForm, LoginForm.$valid);
		}
	}
	LoginIndexController.$inject = [];

	app.controller('LoginIndexController', LoginIndexController);

	return LoginIndexController;
});
