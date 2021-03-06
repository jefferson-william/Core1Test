/// <reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../Lib/DefinitelyTyped/Typed.d.ts" />

require.config({
    paths: {
        css: '/bower_components/require-css/css',
        async: '/bower_components/requirejs-plugins/src/async',
        depend: '/bower_components/requirejs-plugins/src/depend',
        font: '/bower_components/requirejs-plugins/src/font',
        goog: '/bower_components/requirejs-plugins/src/goog',
        image: '/bower_components/requirejs-plugins/src/image',
        json: '/bower_components/requirejs-plugins/src/json',
        mdown: '/bower_components/requirejs-plugins/src/mdown',
        noext: '/bower_components/requirejs-plugins/src/noext',
        propertyParser: '/bower_components/requirejs-plugins/src/propertyParser',
        autocomplete: '/bower_components/material/src/components/autocomplete/autocomplete',
        backdrop: '/bower_components/material/src/components/backdrop/backdrop',
        bottomSheet: '/bower_components/material/src/components/bottomSheet/bottomSheet',
        button: '/bower_components/material/src/components/button/button',
        card: '/bower_components/material/src/components/card/card',
        checkbox: '/bower_components/material/src/components/checkbox/checkbox',
        chips: '/bower_components/material/src/components/chips/chips',
        content: '/bower_components/material/src/components/content/content',
        datepicker: '/bower_components/material/src/components/datepicker/datepicker',
        dialog: '/bower_components/material/src/components/dialog/dialog',
        divider: '/bower_components/material/src/components/divider/divider',
        fabActions: '/bower_components/material/src/components/fabActions/fabActions',
        fabSpeedDial: '/bower_components/material/src/components/fabSpeedDial/fabSpeedDial',
        fabToolbar: '/bower_components/material/src/components/fabToolbar/fabToolbar',
        fabTrigger: '/bower_components/material/src/components/fabTrigger/fabTrigger',
        gridList: '/bower_components/material/src/components/gridList/gridList',
        icon: '/bower_components/material/src/components/icon/icon',
        input: '/bower_components/material/src/components/input/input',
        list: '/bower_components/material/src/components/list/list',
        menu: '/bower_components/material/src/components/menu/menu',
        menuBar: '/bower_components/material/src/components/menuBar/menuBar',
        progressCircular: '/bower_components/material/src/components/progressCircular/progressCircular',
        progressLinear: '/bower_components/material/src/components/progressLinear/progressLinear',
        radioButton: '/bower_components/material/src/components/radioButton/radioButton',
        select: '/bower_components/material/src/components/select/select',
        showHide: '/bower_components/material/src/components/showHide/showHide',
        sidenav: '/bower_components/material/src/components/sidenav/sidenav',
        slider: '/bower_components/material/src/components/slider/slider',
        sticky: '/bower_components/material/src/components/sticky/sticky',
        subheader: '/bower_components/material/src/components/subheader/subheader',
        swipe: '/bower_components/material/src/components/swipe/swipe',
        switch: '/bower_components/material/src/components/switch/switch',
        tabs: '/bower_components/material/src/components/tabs/tabs',
        toast: '/bower_components/material/src/components/toast/toast',
        toolbar: '/bower_components/material/src/components/toolbar/toolbar',
        tooltip: '/bower_components/material/src/components/tooltip/tooltip',
        virtualRepeat: '/bower_components/material/src/components/virtualRepeat/virtualRepeat',
        whiteframe: '/bower_components/material/src/components/whiteframe/whiteframe',
        animate: '/bower_components/material/src/core/util/animation/animate',
        animateCss: '/bower_components/material/src/core/util/animation/animateCss',
        layout: '/bower_components/material/src/core/services/layout/layout',
        gestures: '/bower_components/material/src/core/services/gesture/gesture',
        theming: '/bower_components/material/src/core/services/theming/theming',
        angularMaterialCore: '/bower_components/angular-material/modules/js/core/core',
        autocompleteCss: '/bower_components/angular-material/modules/closure/autocomplete/autocomplete',
        backdropCss: '/bower_components/angular-material/modules/closure/backdrop/backdrop',
        bottomSheetCss: '/bower_components/angular-material/modules/closure/bottomSheet/bottomSheet',
        buttonCss: '/bower_components/angular-material/modules/closure/button/button',
        cardCss: '/bower_components/angular-material/modules/closure/card/card',
        checkboxCss: '/bower_components/angular-material/modules/closure/checkbox/checkbox',
        chipsCss: '/bower_components/angular-material/modules/closure/chips/chips',
        contentCss: '/bower_components/angular-material/modules/closure/content/content',
        calendarCss: '/bower_components/angular-material/modules/closure/calendar/calendar',
        datepickerCss: '/bower_components/angular-material/modules/closure/datepicker/datepicker',
        dialogCss: '/bower_components/angular-material/modules/closure/dialog/dialog',
        dividerCss: '/bower_components/angular-material/modules/closure/divider/divider',
        fabSpeedDialCss: '/bower_components/angular-material/modules/closure/fabSpeedDial/fabSpeedDial',
        fabToolbarCss: '/bower_components/angular-material/modules/closure/fabToolbar/fabToolbar',
        gridListCss: '/bower_components/angular-material/modules/closure/gridList/gridList',
        iconCss: '/bower_components/angular-material/modules/closure/icon/icon',
        inputCss: '/bower_components/angular-material/modules/closure/input/input',
        listCss: '/bower_components/angular-material/modules/closure/list/list',
        menuCss: '/bower_components/angular-material/modules/closure/menu/menu',
        menuBarCss: '/bower_components/angular-material/modules/closure/menuBar/menuBar',
        progressCircularCss: '/bower_components/angular-material/modules/closure/progressCircular/progressCircular',
        progressLinearCss: '/bower_components/angular-material/modules/closure/progressLinear/progressLinear',
        radioButtonCss: '/bower_components/angular-material/modules/closure/radioButton/radioButton',
        selectCss: '/bower_components/angular-material/modules/closure/select/select',
        sidenavCss: '/bower_components/angular-material/modules/closure/sidenav/sidenav',
        sliderCss: '/bower_components/angular-material/modules/closure/slider/slider',
        stickyCss: '/bower_components/angular-material/modules/closure/sticky/sticky',
        subheaderCss: '/bower_components/angular-material/modules/closure/subheader/subheader',
        switchCss: '/bower_components/angular-material/modules/closure/switch/switch',
        tabsCss: '/bower_components/angular-material/modules/closure/tabs/tabs',
        toastCss: '/bower_components/angular-material/modules/closure/toast/toast',
        toolbarCss: '/bower_components/angular-material/modules/closure/toolbar/toolbar',
        tooltipCss: '/bower_components/angular-material/modules/closure/tooltip/tooltip',
        virtualRepeaterCss: '/bower_components/angular-material/modules/closure/virtualRepeater/virtualRepeater',
        whiteframeCss: '/bower_components/angular-material/modules/closure/whiteframe/whiteframe',
        layoutCss: '/bower_components/angular-material/modules/layouts/angular-material.layouts',
        angularMaterialCoreCss: '/bower_components/angular-material/modules/js/core/core',
        modernizr: '/bower_components/modernizr/src/Modernizr',
        angular: '/bower_components/angular/angular',
        angularResource: '../bower_components/angular-resource/angular-resource',
        angularSanitize: '../bower_components/angular-sanitize/angular-sanitize',
        angularCookies: '../bower_components/angular-cookies/angular-cookies',
        angularPortuguese: '../bower_components/angular-i18n/angular-locale_pt-br',
        angularAnimate: '/bower_components/angular-animate/angular-animate',
        angularAria: '/bower_components/angular-aria/angular-aria',
        angularMessages: '/bower_components/angular-messages/angular-messages',
        angularUiRouter: '/bower_components/angular-ui-router/release/angular-ui-router',
        angularAMD: '/bower_components/angularAMD/dist/angularAMD',
        angularDynamicLocale: '/bower_components/angular-dynamic-locale/dist/tmhDynamicLocale',
        angularTranslate: '/bower_components/angular-translate/angular-translate',
        angularTranslateHandlerLog: '/bower_components/angular-translate-handler-log/angular-translate-handler-log',
        angularTranslateLoaderStaticFiles: '/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files',
        angularTranslateStorageCookie: '/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie',
        angularTranslateStorageLocal: '/bower_components/angular-translate-storage-local/angular-translate-storage-local',
        ngload: '/bower_components/angularAMD/ngload',
        angularMaterialComplete: '/bower_components/angular-material/angular-material',
        uiRouterExtras: '../bower_components/ui-router-extras/release/ct-ui-router-extras',
        uiRouterExtrasCore: '../bower_components/ui-router-extras/release/modular/ct-ui-router-extras.core',
        uiRouterExtrasFuture: '../bower_components/ui-router-extras/release/modular/ct-ui-router-extras.future',
        mdDataTable: '../bower_components/angular-material-data-table/dist/md-data-table',
        mdDataTableCss: '../bower_components/angular-material-data-table/dist/md-data-table',
        LocaleService: '/js/Service/LocaleService',
        LanguageSelectDirective: '/js/Directive/LanguageSelectDirective',
        BootstrapCss: '/css/Bootstrap',
        Bootstrap: '/js/Bootstrap',
        Lazyload: '/js/Lazyload',
        Util: '/js/Util',
        Route: '/js/Route',
        AppCss: '/css/App',
        App: '/js/App',
        IdentificacaoService: '/js/Service/Identificacao',
        LayoutController: '/js/Controller/Layout',
        HeaderController: '/js/Controller/Header',
        FooterController: '/js/Controller/Footer',
        LoginIndexController: '/js/Controller/Login/Index',
        LoginIndexCss: '/css/Login/Index',
    },
    shim: {
        autocomplete: { deps: ['angularMaterialCore', 'css!autocompleteCss'] },
        backdrop: { deps: ['angularMaterialCore', 'css!backdropCss'] },
        bottomSheet: { deps: ['angularMaterialCore', 'css!bottomSheetCss'] },
        button: { deps: ['angularMaterialCore', 'css!buttonCss'] },
        card: { deps: ['angularMaterialCore', 'css!cardCss'] },
        checkbox: { deps: ['angularMaterialCore', 'css!checkboxCss'] },
        chips: { deps: ['angularMaterialCore', 'css!chipsCss'] },
        content: { deps: ['angularMaterialCore', 'css!contentCss'] },
        datepicker: { deps: ['angularMaterialCore', 'css!calendarCss', 'css!datepickerCss'] },
        dialog: { deps: ['angularMaterialCore', 'css!dialogCss'] },
        divider: { deps: ['angularMaterialCore', 'css!dividerCss'] },
        fabActions: { deps: ['angularMaterialCore', 'css!fabActionsCss'] },
        fabSpeedDial: { deps: ['angularMaterialCore', 'css!fabSpeedDialCss'] },
        fabToolbar: { deps: ['angularMaterialCore', 'css!fabToolbarCss'] },
        fabTrigger: { deps: ['angularMaterialCore', 'css!fabTriggerCss'] },
        gridList: { deps: ['angularMaterialCore', 'css!gridListCss'] },
        icon: { deps: ['angularMaterialCore', 'css!iconCss'] },
        input: { deps: ['angularMaterialCore', 'css!inputCss', 'gestures'] },
        list: { deps: ['angularMaterialCore', 'css!listCss'] },
        menu: { deps: ['angularMaterialCore', 'css!menuCss'] },
        menuBar: { deps: ['angularMaterialCore', 'css!menuBarCss'] },
        progressCircular: { deps: ['angularMaterialCore', 'css!progressCircularCss'] },
        progressLinear: { deps: ['angularMaterialCore', 'css!progressLinearCss'] },
        radioButton: { deps: ['angularMaterialCore', 'css!radioButtonCss'] },
        select: { deps: ['angularMaterialCore', 'css!selectCss'] },
        showHide: { deps: ['angularMaterialCore', 'css!showHideCss'] },
        sidenav: { deps: ['angularMaterialCore', 'css!sidenavCss'] },
        slider: { deps: ['angularMaterialCore', 'css!sliderCss'] },
        sticky: { deps: ['angularMaterialCore', 'css!stickyCss'] },
        subheader: { deps: ['angularMaterialCore', 'css!subheaderCss'] },
        swipe: { deps: ['angularMaterialCore', 'css!swipeCss'] },
        switch: { deps: ['angularMaterialCore', 'css!switchCss'] },
        tabs: { deps: ['angularMaterialCore', 'css!tabsCss'] },
        toast: { deps: ['angularMaterialCore', 'css!toastCss'] },
        toolbar: { deps: ['angularMaterialCore', 'css!toolbarCss'] },
        tooltip: { deps: ['angularMaterialCore', 'css!tooltipCss'] },
        virtualRepeat: { deps: ['angularMaterialCore', 'css!virtualRepeatCss'] },
        whiteframe: { deps: ['angularMaterialCore', 'css!whiteframeCss'] },
        animateCss: { deps: ['angularAMD'] },
        layout: { deps: ['angularAMD'] },
        gestures: { deps: ['angularAMD'] },
        theming: { deps: ['angularAMD'] },
        angularAnimate: { deps: ['angular'] },
        angularAria: { deps: ['angular'] },
        angularMessages: { deps: ['angular'] },
        angularResource: { deps: ['angular'] },
        angularSanitize: { deps: ['angular'] },
        angularCookies: { deps: ['angular'] },
        angularPortuguese: { deps: ['angular'] },
        angularUiRouter: { deps: ['angular'] },
        angularAMD: { deps: ['angular'] },
        angularTranslate: { deps: ['angularAMD'] },
        angularDynamicLocale: { deps: ['angularTranslate'] },
        angularTranslateHandlerLog: { deps: ['angularTranslate'] },
        angularTranslateLoaderStaticFiles: { deps: ['angularTranslate'] },
        angularTranslateStorageCookie: { deps: ['angularTranslate'] },
        angularTranslateStorageLocal: { deps: ['angularTranslate'] },
        ngload: { deps: ['angularAMD'] },
        angularMaterialCore: { deps: ['angularAMD', 'animateCss', 'layout', 'gestures', 'theming', 'angularResource', 'angularSanitize', 'angularAnimate', 'angularCookies', 'angularAria', 'angularMessages', 'css!angularMaterialCoreCss'] },
        uiRouterExtrasCore: { deps: ['angular'] },
        uiRouterExtrasFuture: { deps: ['uiRouterExtrasCore'] },
        mdDataTable: { deps: ['angularMaterialCore', 'css!mdDataTableCss'] },
        LocaleService: { deps: ['App'] },
        LanguageSelectDirective: { deps: ['App'] },
        Route: { deps: ['Lazyload'] },
        App: { deps: ['angularMaterialCore', 'angularAMD', 'angularUiRouter', 'angularDynamicLocale', 'angularTranslate', 'angularTranslateHandlerLog', 'angularTranslateLoaderStaticFiles', 'angularTranslateStorageCookie', 'angularTranslateStorageLocal', 'Lazyload', 'Util', 'Route', 'IdentificacaoService', 'css!BootstrapCss', 'css!AppCss'] },
        IdentificacaoService: { deps: ['angular', 'Lazyload'] },
        LayoutController: { deps: ['App'] },
        HeaderController: { deps: ['App'] },
        FooterController: { deps: ['App'] },
        LoginIndexController: { deps: ['App', 'IdentificacaoService', 'input', 'whiteframe', 'button', 'css!LoginIndexCss'] },
    }
});

require.config({
    baseUrl: '',
    waitSeconds: 0,
});

require([
    'angularAMD',
    'angularMaterialCore',
    'LocaleService',
    'LanguageSelectDirective',
    'angularPortuguese',
], () => {
    angular.element(document).ready(() => {
        require([
            'App',
        ], () => {});
    });
});

if ('serviceWorker' in navigator) {
    (<any>navigator).serviceWorker.register('/sw.js').then(function() { 
        console.log("Service Worker Registered");
    });
}
