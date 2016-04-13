'use strict';
define(function (require) {

    var app = require('../app');

    require("./service");

    app.controller('usersCtrl', ['$scope', function ($scope) {
        $scope.user = app.get('usersService').getById(12)
    }]);

});