'use strict';

describe('myApp.login module', function() {

  beforeEach(module('myApp.view1'));

  describe('login controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var loginCtrl = $controller('LoginCtrl');
      expect(loginCtrl).toBeDefined();
    }));

  });
});