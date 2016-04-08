'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login/login.html',
                controller: 'LoginCtrl'
            })
            .when("/regist", {
                templateUrl: 'login/regist.html',
                controller: 'LoginCtrl'
            }).when("/contact",{
            
        });
    }])

    .controller('LoginCtrl', [function () {
        $scope.user={
            username:"KeithFu",password:"123456"
        }
        $scope.doLogin=function (user) {
            alert(user.username);
        }

    }])

;