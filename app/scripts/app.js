'use strict';

/**
 * @ngdoc overview
 * @name angularChartApp
 * @description
 * # angularChartApp
 *
 * Main module of the application.
 */
angular
  .module('angularChartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'amChartsDirective',
    'adf',
    'adf.structures.base',
    'adf.widget.book'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'ChartCtrl',
        controllerAs: 'chart'
      })
      .when('/donat', {
        templateUrl: 'views/donat.html',
        controller: 'DonatCtrl',
        controllerAs: 'donat'
      })
      .when('/amchart', {
        templateUrl: 'views/amchart.html',
        controller: 'AmchartCtrl',
        controllerAs: 'amchartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
