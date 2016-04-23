'use strict';

/**
 * @ngdoc function
 * @name angularChartApp.controller:DonatCtrl
 * @description
 * # DonatCtrl
 * Controller of the angularChartApp
 */
angular.module('angularChartApp')
  .controller('DonatCtrl', function ($scope) {


    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
//    $scope.colors = [0xFDB45C, 0xFDB45C, 0x0];
//    $scope.colors = ['red', 'green', 'transparent'];
    $scope.options = {percentageInnerCutout: 90}

  });
