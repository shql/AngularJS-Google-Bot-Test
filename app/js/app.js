'use strict';


// Declare app level module which depends on filters, and services
angular.module('seo', [
  'ngRoute',
  'seo.filters',
  'seo.services',
  'seo.directives',
  'seo.controllers'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
  $routeProvider.when('/article/:articleId', {templateUrl: 'partials/article.html', controller: 'ArticleCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
