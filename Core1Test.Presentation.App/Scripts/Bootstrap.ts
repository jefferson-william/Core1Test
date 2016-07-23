﻿/// <reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
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
        autocompleteCss: '/bower_components/angular-material-sass-files/components/autocomplete',
        backdropCss: '/bower_components/angular-material-sass-files/components/backdrop',
        bottomSheetCss: '/bower_components/angular-material-sass-files/components/bottom-sheet',
        buttonCss: '/bower_components/angular-material-sass-files/components/button',
        cardCss: '/bower_components/angular-material-sass-files/components/card',
        checkboxCss: '/bower_components/angular-material-sass-files/components/checkbox',
        chipsCss: '/bower_components/angular-material-sass-files/components/chips',
        contentCss: '/bower_components/angular-material-sass-files/components/content',
        calendarCss: '/bower_components/angular-material-sass-files/components/calendar',
        datepickerCss: '/bower_components/angular-material-sass-files/components/datepicker',
        dialogCss: '/bower_components/angular-material-sass-files/components/dialog',
        dividerCss: '/bower_components/angular-material-sass-files/components/divider',
        fabSpeedDialCss: '/bower_components/angular-material-sass-files/components/fabSpeedDial',
        fabToolbarCss: '/bower_components/angular-material-sass-files/components/fabToolbar',
        gridListCss: '/bower_components/angular-material-sass-files/components/grid-list',
        iconCss: '/bower_components/angular-material-sass-files/components/icon',
        inputCss: '/bower_components/angular-material-sass-files/components/input',
        listCss: '/bower_components/angular-material-sass-files/components/list',
        menuCss: '/bower_components/angular-material-sass-files/components/menu',
        menuBarCss: '/bower_components/angular-material-sass-files/components/menu-bar',
        progressCircularCss: '/bower_components/angular-material-sass-files/components/progress-circular',
        progressLinearCss: '/bower_components/angular-material-sass-files/components/progress-linear',
        radioButtonCss: '/bower_components/angular-material-sass-files/components/radio-button',
        selectCss: '/bower_components/angular-material-sass-files/components/select',
        sidenavCss: '/bower_components/angular-material-sass-files/components/sidenav',
        sliderCss: '/bower_components/angular-material-sass-files/components/slider',
        stickyCss: '/bower_components/angular-material-sass-files/components/sticky',
        subheaderCss: '/bower_components/angular-material-sass-files/components/subheader',
        switchCss: '/bower_components/angular-material-sass-files/components/switch',
        tabsCss: '/bower_components/angular-material-sass-files/components/tabs',
        toastCss: '/bower_components/angular-material-sass-files/components/toast',
        toolbarCss: '/bower_components/angular-material-sass-files/components/toolbar',
        tooltipCss: '/bower_components/angular-material-sass-files/components/tooltip',
        virtualRepeaterCss: '/bower_components/angular-material-sass-files/components/virtual-repeater',
        whiteframeCss: '/bower_components/angular-material-sass-files/components/whiteframe',
        layout: '/bower_components/angular-material-sass-files/components/layout.scss',
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
        angularAMD: '/bower_components/angularAMD/angularAMD',
        ngload: '/bower_components/angularAMD/ngload',
        angularMaterial: '/bower_components/angular-material/angular-material',
        uiRouterExtras: '../bower_components/ui-router-extras/release/ct-ui-router-extras',
        uiRouterExtrasCore: '../bower_components/ui-router-extras/release/modular/ct-ui-router-extras.core',
        uiRouterExtrasFuture: '../bower_components/ui-router-extras/release/modular/ct-ui-router-extras.future',
        mdDataTable: '../bower_components/angular-material-data-table/dist/md-data-table',
        mdDataTableCss: '../bower_components/angular-material-data-table/dist/md-data-table',
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
    },
    shim: {
        autocomplete: { deps: ['angularMaterial', 'css!autocompleteCss'] },
        backdrop: { deps: ['angularMaterial', 'css!backdropCss'] },
        bottomSheet: { deps: ['angularMaterial', 'css!bottomSheetCss'] },
        button: { deps: ['angularMaterial', 'css!buttonCss'] },
        card: { deps: ['angularMaterial', 'css!cardCss'] },
        checkbox: { deps: ['angularMaterial', 'css!checkboxCss'] },
        chips: { deps: ['angularMaterial', 'css!chipsCss'] },
        content: { deps: ['angularMaterial', 'css!contentCss'] },
        datepicker: { deps: ['angularMaterial', 'css!calendarCss', 'css!datepickerCss'] },
        dialog: { deps: ['angularMaterial', 'css!dialogCss'] },
        divider: { deps: ['angularMaterial', 'css!dividerCss'] },
        fabActions: { deps: ['angularMaterial', 'css!fabActionsCss'] },
        fabSpeedDial: { deps: ['angularMaterial', 'css!fabSpeedDialCss'] },
        fabToolbar: { deps: ['angularMaterial', 'css!fabToolbarCss'] },
        fabTrigger: { deps: ['angularMaterial', 'css!fabTriggerCss'] },
        gridList: { deps: ['angularMaterial', 'css!gridListCss'] },
        icon: { deps: ['angularMaterial', 'css!iconCss'] },
        input: { deps: ['angularMaterial', 'css!inputCss'] },
        list: { deps: ['angularMaterial', 'css!listCss'] },
        menu: { deps: ['angularMaterial', 'css!menuCss'] },
        menuBar: { deps: ['angularMaterial', 'css!menuBarCss'] },
        progressCircular: { deps: ['angularMaterial', 'css!progressCircularCss'] },
        progressLinear: { deps: ['angularMaterial', 'css!progressLinearCss'] },
        radioButton: { deps: ['angularMaterial', 'css!radioButtonCss'] },
        select: { deps: ['angularMaterial', 'css!selectCss'] },
        showHide: { deps: ['angularMaterial', 'css!showHideCss'] },
        sidenav: { deps: ['angularMaterial', 'css!sidenavCss'] },
        slider: { deps: ['angularMaterial', 'css!sliderCss'] },
        sticky: { deps: ['angularMaterial', 'css!stickyCss'] },
        subheader: { deps: ['angularMaterial', 'css!subheaderCss'] },
        swipe: { deps: ['angularMaterial', 'css!swipeCss'] },
        switch: { deps: ['angularMaterial', 'css!switchCss'] },
        tabs: { deps: ['angularMaterial', 'css!tabsCss'] },
        toast: { deps: ['angularMaterial', 'css!toastCss'] },
        toolbar: { deps: ['angularMaterial', 'css!toolbarCss'] },
        tooltip: { deps: ['angularMaterial', 'css!tooltipCss'] },
        virtualRepeat: { deps: ['angularMaterial', 'css!virtualRepeatCss'] },
        whiteframe: { deps: ['angularMaterial', 'css!whiteframeCss'] },
        angularAnimate: { deps: ['angular'] },
        angularAria: { deps: ['angular'] },
        angularMessages: { deps: ['angular'] },
        angularResource: { deps: ['angular'] },
        angularSanitize: { deps: ['angular'] },
        angularCookies: { deps: ['angular'] },
        angularPortuguese: { deps: ['angular'] },
        angularUiRouter: { deps: ['angular'] },
        angularAMD: { deps: ['angular'] },
        ngload: { deps: ['angularAMD'] },
        angularMaterial: { deps: ['angularResource', 'angularSanitize', 'angularAnimate', 'angularCookies', 'angularPortuguese', 'angularAria', 'angularMessages'] },
        uiRouterExtrasCore: { deps: ['angular'] },
        uiRouterExtrasFuture: { deps: ['uiRouterExtrasCore'] },
        mdDataTable: { deps: ['angularMaterial', 'css!mdDataTableCss'] },
        Route: { deps: ['Lazyload'] },
        App: { deps: ['angularMaterial', 'angularAMD', 'angularUiRouter', 'Lazyload', 'Util', 'Route', 'IdentificacaoService', 'css!BootstrapCss', 'css!AppCss'] },
        IdentificacaoService: { deps: ['angular', 'Lazyload'] },
        LayoutController: { deps: ['App'] },
        HeaderController: { deps: ['App'] },
        FooterController: { deps: ['App'] },
        LoginIndexController: { deps: ['App'] },
    }
});

require.config({
    baseUrl: '',
    waitSeconds: 0,
});

require([
    'angularAMD',
    'angularMaterial',
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
