/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/angular-material/angular-material.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/angular-ui-router/angular-ui-router.d.ts" />

declare module 'Typed' {
    export = Typed;
}

declare module Typed.UiExtras {
    interface IFutureStateProvider {
        futureState(route: Typed.Ui.IState): void;
        stateFactory(type: string, stateFactory: Typed.Ui.IStateChange): void;
        addResolve: Function;
    }

    interface IStateProvider {
        $get(): Function;
        decorator(name: string, func: Function): Function;
        state(name: string, routeObject: {}): Function;
    }
}

declare module Typed.Ui {
    interface IStateEvent {
        currentScope: angular.IScope;
        defaultPrevented: boolean;
        name: string;
        preventDefault: Function;
        targetScope: angular.IScope;
    }

    interface IState extends angular.ui.IState {
        type: string;
        urlMachter: RegExp;
        $$state: Function;
        dependencies?: string[];
        resolves?: any[];
    }

    interface IStateChange {
        parent?: {} | string;
        data?: {};
        url?: {} | string;
        navigable?: {};
        params?: {};
        views?: {};
        ownParams?: {};
        path?: {};
        includes?: {};
        controller?: string | any[] | Function;
        name?: string;
        templateUrl?: string;
    }

    interface IRouteChange {
        caseInsentitiveMatch: boolean;
        controller: string;
        controllerAs: string;
        dependencies: string[];
        keys: number[];
        originalPath: string;
        regexp: RegExp;
        reloadOnSearch: boolean;
        templateUrl: string;
        resolve: {
            load: ng.IPromise<{}>;
        };
    }
}

declare module Typed.Material {
    interface ITheme extends angular.material.ITheme {
        theme(nameColor: string): Typed.Material.ITheme;
    }
}

declare namespace Typed {
    interface IUtil {
        RequireCtrlStateFactory($q: any, futureState: Typed.Ui.IState): void;
        IframeStateFactory($q: angular.IQService, futureState: any): angular.IPromise<any>;
        NgLoadStateFactory($q: angular.IQService, futureState: any): angular.IPromise<any>;
        LoadAndRegisterFutureStates(): void;
    }
    interface ILazyload {
        Set(object: {}): void;
        $stateProvider: Typed.UiExtras.IStateProvider;
        $futureStateProvider: Typed.UiExtras.IFutureStateProvider;
        $state: angular.ui.IStateService;
    }
}
