/// <reference path="../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../Lib/DefinitelyTyped/Typed.d.ts" />

define([
	'angularAMD',
	'Lazyload',
], (
	app: angular.IModule,
	Lazyload: Typed.ILazyload) => {
	
	let IdentificacaoService;

	class Autenticacao implements IAutenticacaoClass {
		public Autenticado: boolean = false;

		public SetarAutenticado(LoginModel: ILoginModel): void {
			if (!LoginModel || !LoginModel.Senha) {
				this.Autenticado = false;
			} else {
				this.Autenticado = true;
			}
		}

		public Autenticar(LoginModel: ILoginModel): ILoginModel {
			LoginModel = this.ValidarDadosBasicos(LoginModel);
			if (LoginModel) LoginModel = this.ValidarSenha(LoginModel);
			return LoginModel;
		}

		private ValidarSenha(LoginModel: ILoginModel): ILoginModel {
			if (LoginModel.Senha !== LoginModel.Email[0]) {
				LoginModel.Senha = null;
			}
			this.SetarAutenticado(LoginModel);
			return LoginModel;
		}

		private ValidarDadosBasicos(LoginModel: ILoginModel): ILoginModel {
			if (!LoginModel) {
				LoginModel = { Email: '', Senha: '' };
			}
			if (LoginModel.Email === '' || LoginModel.Senha === '') {
				LoginModel = null;
			}
			this.SetarAutenticado(LoginModel);
			return LoginModel;
		};
	}

	class Login implements ILoginClass {
		public Autenticacao: IAutenticacaoClass;

		constructor(Autenticacao: IAutenticacaoClass) {
			this.Autenticacao = Autenticacao;
		}

		public Logar() {
		}
	}

	class Identificacao implements IIdentificacaoClass {
		public Login: ILoginClass;
		public Autenticacao: IAutenticacaoClass;

		constructor(Login: ILoginClass, Autenticacao: IAutenticacaoClass) {
			this.Login = Login;
			this.Autenticacao = Autenticacao;

			this.TratarEntradaDeDadosNoConstrutor();
		}

		private TratarEntradaDeDadosNoConstrutor(): void {
			this.Login = new Login(this.Autenticacao);
		}
	}

	IdentificacaoService = app.factory('IdentificacaoService', (): {} => {
		let autenticacao = new Autenticacao();
		let login: ILoginClass = new Login(autenticacao);

		return new Identificacao(login, autenticacao);
	});

	return IdentificacaoService;
});
