/// <reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../Lib/DefinitelyTyped/Typed.d.ts" />

define([
    'Lazyload'
], (Lazyload: Typed.ILazyload): void => {
    var Route, originalPath, route;

    // Definir todas as rotas
    Route = {
        'Layout': {
            url: '/',
            dependencies: ['HeaderController', 'FooterController'],
            views: {
                'Layout': {
                    templateUrl: '/partials/Layout.html',
                },
                'Header@Layout': {
                    templateUrl: '/partials/Header.html',
                    controller: 'HeaderController',
                    controllerAs: 'Header',
                },
                'Footer@Layout': {
                    templateUrl: '/partials/Footer.html',
                    controller: 'FooterController',
                    controllerAs: 'Footer',
                }
            }
        },
        'Layout.ValuesIndex': {
            url: '/values/',
            templateUrl: '/partials/values/index.html',
            controller: './ValuesIndexController',
            controllerAs: 'ValuesIndex',
            dependencies: ['ValuesIndexController'],
        }
    };

    Route.StateValidar = (state: any): boolean => {
        return typeof state == 'object' && (state.url || state.views || state.controller) ? true : false;
    };

    Route.SetarTodas = (): void => {
        var name: string,
            state: any;

        for (name in Route) {
            state = Route[name];

            Route.StateValidar(state) && Lazyload.$stateProvider.state(name, state);
        }
    };

    return Route;
});
