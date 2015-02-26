/**
 * @ngdoc overview
 * @name Grapevine
 * @description
 * # Chrome Extension for commenting on websites
 *
 * Main module of the application.
 */
angular.module('cs2', [ 'ngRoute', 'ngCookies' ])
  /**
   * @name Router
   * @description
   * # Module for handling view state and path
   */
  .config(['$routeProvider', function($routeProvider) {
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
      .when('/members', {
        title: 'Members',
        templateUrl: 'views/members/members.html',
        controller: 'MembersCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }])
  .value('API', 'http://localhost:8001');
  //.value('API', 'somesite.com/api');