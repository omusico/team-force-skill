'use strict';

// Declare app level module which depends on filters, and services
var teamForceApp = angular.module('teamForceApp', ['ngResource']).
    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/people',
        {
            templateUrl:'views/people.html',
            controller:'SearchController'
        });
    $routeProvider.when('/projects',
        {
            templateUrl:'views/projects.html',
            controller:'SearchController'
        }
    );
    $routeProvider.when('/skills',
        {
            templateUrl:'views/skills.html',
            controller:'SearchController'
        }
    );
    $routeProvider.when('/personDetail',
        {
            templateUrl:'views/personDetail.html',
            controller:'PersonController'
        }
    );
    $routeProvider.when('/newPersonDetail',
        {
            templateUrl:'views/insertPersonDetail.html',
            controller:'NewPersonController'
        }
    );

    /*
     $routeProvider.when('/view2', {templateUrl:'partials/partial2.html', controller:MyCtrl2});
     $routeProvider.otherwise({redirectTo:'/view1'});
     */
}]);


