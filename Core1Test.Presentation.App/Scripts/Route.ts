/// <reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../Lib/DefinitelyTyped/Typed.d.ts" />

define((): void => {
    var Route, originalPath, route;

    // Definir todas as rotas
    Route = [
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
