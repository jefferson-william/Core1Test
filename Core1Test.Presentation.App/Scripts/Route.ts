/// <reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../Lib/DefinitelyTyped/Typed.d.ts" />

define((): void => {
    var Route, originalPath, route;

    // Definir todas as rotas
    Route = [
        {
            name: 'Layout',
            url: '/',
            dependencies: ['HeaderController', 'FooterController'],
            views: {
                'Header': {
                    templateUrl: '/partials/Header.html',
                    controller: 'HeaderController',
                    controllerAs: 'Header',
                },
                'Footer': {
                    templateUrl: '/partials/Footer.html',
                    controller: 'FooterController',
                    controllerAs: 'Footer',
                }
            }
        },
        // {
        //     name: 'Header',
        //     url: '/',
        //     templateUrl: '/partials/Header.html',
        //     controller: './HeaderController',
        //     controllerAs: 'Header',
        //     dependencies: ['./HeaderController'],
        // },
        // {
        //     name: 'Footer',
        //     url: '/',
        //     templateUrl: '/partials/Footer.html',
        //     controller: './FooterController',
        //     controllerAs: 'Footer',
        //     dependencies: ['./FooterController'],
        // },
        {
            name: 'ValuesIndex',
            url: '/values/',
            templateUrl: '/partials/values/index.html',
            controller: './ValuesIndexController',
            controllerAs: 'ValuesIndex',
            dependencies: ['./ValuesIndexController'],
        }
    ];

    for (originalPath in Route) {
        route = Route[originalPath];
        route.type = 'requireCtrl';
    }

    return Route;
});
