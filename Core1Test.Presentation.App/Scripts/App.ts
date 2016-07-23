/// <reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../Lib/DefinitelyTyped/Typed.d.ts" />

define([
	'angularAMD',
	'Util',
	'Route',
	'Lazyload',
], (
	angularAMD: any,
	Util: Typed.IUtil,
	Route: any,
	Lazyload: Typed.ILazyload) => {

	var app: any, bootstrap: any,
		Configuration: Function, Runner: Function;

	app = angular.module('App', [
        'ngLocale', 'ngResource', 'ngAria', 'ngAnimate', 'ngSanitize', 'ngMessages', 'ngCookies',
        'ui.router',
        'ngMaterial',
    ]);

    app.bootstrap = () => {
        angular.bootstrap(document, ['App']);
    };

    /**
     * Configurações gerais ao inicializar a aplicação
     */
    Configuration = (
        $stateProvider: Typed.UiExtras.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider,
        $locationProvider: angular.ILocationProvider,
        $controllerProvider: angular.IControllerProvider,
        $provide: angular.auto.IProvideService,
        $filterProvider: angular.IFilterProvider,
        $compileProvider: angular.ICompileProvider,
        $mdThemingProvider: Typed.Material.ITheme): void => {

        let overrideProvider: {};
        
        // Sobrescrever métodos do AngularJS através de seus respectivos Providers
        overrideProvider = {
            controller: $controllerProvider.register,
            service: $provide.service,
            factory: $provide.factory,
            filter: $filterProvider.register,
            directive: $compileProvider.directive
        };

        for (var providerName in overrideProvider) {
            angular[providerName] = overrideProvider[providerName];
        }

        // Adicionar alguns Providers no objeto Lazyload para serem usados futuramente
        Lazyload.Set({
            '$stateProvider': $stateProvider,
        });

        // Redirecionar para a url inicial caso a url informada não tenha sido configurada/não exista
        $urlRouterProvider.otherwise('/');

        Route.SetarTodas();

        $locationProvider.html5Mode(true);

        $mdThemingProvider.theme('default').primaryPalette('teal').accentPalette('teal');
    };
    Configuration.$inject = ['$stateProvider', '$urlRouterProvider',
        '$locationProvider', '$controllerProvider', '$provide', '$filterProvider', '$compileProvider',
        '$mdThemingProvider'];

    /**
     * Rodar ações ao iniciar a aplicação
     */
    Runner = (
        $rootScope: angular.IRootScopeService,
        $state: angular.ui.IStateService,
        IdentificacaoService: IIdentificacao): void => {

        Lazyload.$state = $state;

        $rootScope.$on('$stateChangeStart', (
            event: Typed.Ui.IStateEvent,
            toState: Typed.Ui.IState,
            toParams: {},
            fromState: Typed.Ui.IState,
            fromParams: {},
            options: angular.ui.IStateOptions): void => {

            if (!IdentificacaoService.Autenticacao.Autenticado && !(fromState.name === 'LayoutLogin' || toState.name === 'LayoutLogin')) {
                event.preventDefault();

                $state.go('LayoutLogin');
            }
        });

        $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams, options): void => {
            var $body, SetarClasseNomePaginaBody;

            $body = angular.element(document).find('body');

            SetarClasseNomePaginaBody = (): void => {
                $body.removeClass('hide');

                toState.controllerAs && $body.removeClass(fromState.controllerAs).addClass('Page ' + toState.controllerAs);
            };
            
            SetarClasseNomePaginaBody();
        });
    };
    Runner.$inject = ['$rootScope', '$state', 'IdentificacaoService'];

    app.config(Configuration);
    app.run(Runner);

	bootstrap = angularAMD.bootstrap(app)

    return bootstrap;
});
