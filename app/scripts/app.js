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
    'googlechart'
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
      .otherwise({
        redirectTo: '/'
      });
  });
