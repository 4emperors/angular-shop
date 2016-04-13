'use strict';
define(function (require, exports, module) {
    var angular = require('angular');
    var asyncLoader = require('angular-async-loader');

    require('angular-route');

    var app = angular.module('app', ['ngRoute']);

    // initialze app module for async loader
    asyncLoader.configure(app);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.otherwise({redirectTo: '/login'});

    }]);

    module.exports = app;
});
