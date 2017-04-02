'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:metodika1
 * @description
 * # metodika1
 */
angular.module('doctor3App')
    .component('metodika3', {
        templateUrl: 'views/templates/metodika3.html',
        // controller: Metodika1Controller,
        binding: {
            items: '<',
            myTitle: '@title'
        }
    });