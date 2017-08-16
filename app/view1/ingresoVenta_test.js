'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.ingresoVenta'));

  describe('ingresoVenta controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('IngresoVentaCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});