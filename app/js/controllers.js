'use strict';

/* Controllers */

angular.module('seo.controllers', ['seo.services'])

  .controller('HomeCtrl', ['pageService', function(pageService) {
    pageService.setTitle('AngularJS Google Robot Test');
  }])
  .controller('ListCtrl', ['$scope', 'articleService', 'pageService', function($scope, articleService, pageService) {
    pageService.setTitle('List of articles');
    $scope.articles = articleService.getArticles();
  }])
  .controller('ArticleCtrl', ['$scope', 'articleService', '$routeParams', 'pageService', function($scope, articleService, $routeParams, pageService) {
    var article = articleService.getArticle($routeParams.articleId);
    pageService.setTitle('Article: ' + article.title);
    $scope.article = article;
  }])
  ;