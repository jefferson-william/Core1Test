interface ILoginModel {
    Email: string;
    Senha?: string;
}

declare class IIdentificacaoClass {
    Login: ILoginClass;
    Autenticacao: IAutenticacaoClass;
}

declare class IAutenticacaoClass {
    Autenticado: boolean;
    Autenticar(LoginModel: ILoginModel): ILoginModel;
}

declare class ILoginClass {
    Autenticacao: IAutenticacaoClass;
    Logar: Function;
}

declare class ILoginIndexController {
	public LoginModel: ILoginModel;
}
