'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:metodika6
 * @description
 * # metodika6
 */
angular.module('doctor3App')
    .component('metodika6', {
        templateUrl: 'views/templates/metodika6.html',
        // controller: Metodika1Controller,
        binding: {
            items: '<',
            myTitle: '@title'
        }
    });