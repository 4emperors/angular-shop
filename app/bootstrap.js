require.config({
    baseUrl: '/app',
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angular-async-loader': 'bower_components/angular-async-loader/dist/angular-async-loader.min'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-route': {deps: ['angular']}
    }
});

require(['angular', './app-routes'], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});
