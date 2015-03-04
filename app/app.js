/**
 * @ngdoc overview
 * @name Crystal Springs 2 EQ
 * @description
 * # Tool for easy hometeaching reporting
 *
 * Main module of the application.
 */
angular.module('cs2', [ 'ngRoute', 'ngCookies' ])
  /**
   * @name Router
   * @description
   * # Module for handling view state and path
   */
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/home', {
        title: 'Home',
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/reporting', {
        title: 'Reporting',
        templateUrl: 'views/reporting/reporting.html',
        controller: 'ReportingCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);