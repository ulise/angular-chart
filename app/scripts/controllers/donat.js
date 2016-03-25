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

    $scope.chartObject = {};

    $scope.chartObject.type = "PieChart";

    $scope.onions = [
      {v: "Onions"},
      {v: 3},
    ];

    $scope.chartObject.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Slices", type: "number"}
    ], "rows": [
      {c: [
        {v: "Mushrooms"},
        {v: 3},
      ]},
      {c: $scope.onions},
      {c: [
        {v: "Olives"},
        {v: 31}
      ]},
      {c: [
        {v: "Zucchini"},
        {v: 1},
      ]},
      {c: [
        {v: "Pepperoni"},
        {v: 2},
      ]}
    ]};

    $scope.chartObject.options = {
      'title': 'How Much Pizza I Ate Last Night',
      pieHole: 0.9,
      animation: {'start': true}

    };


  });
