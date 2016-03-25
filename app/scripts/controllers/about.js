'use strict';

/**
 * @ngdoc function
 * @name angularChartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularChartApp
 */
angular.module('angularChartApp')
  .controller('AboutCtrl', ['$scope',function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.firstAwesomeThing = function(){
      return this.awesomeThings[0];
    };

    this.secondAwesomeThing = function(){
      return this.awesomeThings[1];
    };

    

  }]);
