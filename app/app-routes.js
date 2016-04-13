define(function (require) {
    var app = require('./app');

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login/login.html',
                controllerUrl:"login/login",
                controller: 'usersCtrl'
            })
            .when("/regist", {
                templateUrl: 'login/regist.html',
                controllerUrl:"login/login",
                controller: 'LoginCtrl'
            }).when("/contact",{
            templateUrl: 'contact/contact.html',
            controllerUrl:"contact/contact",
            controller: 'ContactCtrl'
        });
    }])
});
