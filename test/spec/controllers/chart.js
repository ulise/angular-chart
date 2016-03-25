'use strict';

describe('Controller: ChartcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularChartApp'));

  var ChartcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartcontrollerCtrl = $controller('ChartcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
