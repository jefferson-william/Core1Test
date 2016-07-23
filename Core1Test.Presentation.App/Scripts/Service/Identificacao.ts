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

	class Autenticacao implements IAutenticacao {
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

	class Login implements ILogin {
		public Autenticacao: IAutenticacao;

		constructor(Autenticacao: IAutenticacao) {
			this.Autenticacao = Autenticacao;
		}

		public Logar() {
		}
	}

	class Identificacao implements IIdentificacao {
		public Login: ILogin;
		public Autenticacao: IAutenticacao;

		constructor(Login: ILogin, Autenticacao: IAutenticacao) {
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
		let login: ILogin = new Login(autenticacao);

		return new Identificacao(login, autenticacao);
	});

	return IdentificacaoService;
});
