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
        'ValuesIndex': {
            url: 'values/',
            parent: 'Layout',
            templateUrl: '/partials/values/index.html',
            controller: 'ValuesIndexController',
            controllerAs: 'ValuesIndex',
            dependencies: ['ValuesIndexController'],
        }
    };

    Route.StateValidar = (state: any): boolean => {
        return typeof state == 'object' && (state.url || state.views || state.controller) ? true : false;
    };

    Route.SetarTodas = (): void => {
        var state,
            name: string;

        for (name in Route) {
            state = Route[name];

            Route.StateValidar(state) && Lazyload.$stateProvider.state(name, state);
        }
    };

    Route.InjetarDependenciasResolver = (stateSimple): void => {
        var state, resolveOld, resolveNew, resolve,
            name: string,
            ReordenarResolver: Function,
            TratarResolver: Function;

        ReordenarResolver = (state: any): any => {
            var resolve,
                newResolve: any,
                nameResolve: string;

            newResolve = {};
            resolve = state.resolve;
            newResolve.dependencies = resolve.dependencies;

            for (nameResolve in resolve) {
                newResolve[nameResolve] = resolve[nameResolve];
            }

            resolve = newResolve;

            return state;
        };

        TratarResolver = (state): any => {
            var innerState,
                nameState: string;

            if (Route.StateValidar(state)) {
                resolve = state.resolve = state.resolve || {};

                resolve.dependencies = ['$q', ($q): void => {
                    var deferred;

                    deferred = $q.defer();
                    state.dependencies = state.dependencies || [];
                    state.dependencies.unshift('angularAMD');

                    require(state.dependencies, (angularAMD): void => {
                        angularAMD.processQueue();

                        deferred.resolve();
                    });

                    return deferred.promise;
                }];

                state = ReordenarResolver(state);

                if (state.views) {
                    for (nameState in state.views) {
                        innerState = state.views[nameState];
                        
                        innerState = TratarResolver(innerState);
                    }
                }
            }

            return state;
        };

        if (stateSimple) {
            TratarResolver(stateSimple);
        } else {
            for (name in Route) {
                state = Route[name];

                state = TratarResolver(state);
            }
        }
    };

    Route.InjetarDependenciasResolver();

    return Route;
});
