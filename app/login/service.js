define(function (require) {
    var app = require('../app');

    app.service('usersService', function () {
        return {
            getById: function (id) {
                return {username:"K.F",id:id};
            }
        };
    });
});