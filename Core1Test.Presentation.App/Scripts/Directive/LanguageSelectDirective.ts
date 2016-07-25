/// <reference path="../../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../Lib/DefinitelyTyped/Typed.d.ts" />

define([
	'App',
], (app: angular.IModule) => {

	app.directive('ngTranslateLanguageSelect', ['LocaleService', (LocaleService) => {
        return {
            restrict: 'A',
            replace: true,
            template: '' +
            '<div class="language-select">' +
                '<label>' +
                    '{{"Directives.LanguageSelect.Language" | translate}}:' +
                    '<select ng-model="currentLocaleDisplayName"' +
                        'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"' +
                        'ng-change="changeLanguage(currentLocaleDisplayName)">' +
                    '</select>' +
                '</label>' +
            '</div>' +
            '',
            controller: function ($scope) {
                // $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                $scope.visible = $scope.localesDisplayNames && $scope.localesDisplayNames.length > 1;
    
                $scope.changeLanguage = function (locale) {
                    LocaleService.setLocaleByDisplayName(locale);
                };
            }
        };
    }]);
});
