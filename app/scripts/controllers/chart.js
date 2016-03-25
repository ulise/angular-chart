'use strict';

/**
 * @ngdoc function
 * @name angularChartApp.controller:ChartcontrollerCtrl
 * @description
 * # ChartcontrollerCtrl
 * Controller of the angularChartApp
 */
angular.module('angularChartApp')
  .controller('ChartCtrl', function ($scope, $timeout) {
    $scope.charttype = "Line";

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

    // Simulate async data update
    $timeout(function () {
      $scope.data = [
        [28, 48, 40, 19, 86, 27, 90],
        [65, 59, 80, 81, 56, 55, 40]
      ];
    }, 3000);
  });
