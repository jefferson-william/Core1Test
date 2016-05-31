/// <reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../Lib/DefinitelyTyped/Typed.d.ts" />

define([
    'Lazyload',
    'Route',
], (
    Lazyload: Typed.ILazyload,
    Route: any) => {
    
    var Util = <Typed.IUtil>{};

    Util.RequireCtrlStateFactory = ($q: angular.IQService, futureState: Typed.Ui.IState): angular.IPromise<{}> => {
        var d = $q.defer();

        require(futureState.dependencies, (...args: any[]): void => {
            var fullState = <Typed.Ui.IState>futureState;
            var Controller: string | Function;

            Controller = <string | Function>args[args.length - 1];

            fullState.controller = Controller;
            
            d.resolve(fullState);
        });

        return d.promise;
    };

    Util.IframeStateFactory = ($q: angular.IQService, futureState: any): angular.IPromise<any> => {
        var state = {
            name: futureState.stateName,
            template: "<iframe src='" + futureState.src + "'></iframe>",
            url: futureState.urlPrefix
        };

        return $q.when(state);
    };

    Util.NgLoadStateFactory = ($q: angular.IQService, futureState: any): angular.IPromise<any> => {
        var ngloadDeferred = $q.defer();

        require(['ngload!' + futureState.src, 'ngload', 'angularAMD'],
            function ngloadCallback(result: any, ngload: any, angularAMD: any) {
                angularAMD.processQueue();
                ngloadDeferred.resolve(undefined);
            });

        return ngloadDeferred.promise;
    };

    // Configurar rotas para serem resolvidas de acordo com a promesa feita
    Util.LoadAndRegisterFutureStates = (): void => {
        var originalPath: string;
        
        for (originalPath in Route) {
            var route = <Typed.Ui.IState>Route[originalPath];

            Lazyload.$futureStateProvider.futureState(route);
        }
    };

    return Util;
});
