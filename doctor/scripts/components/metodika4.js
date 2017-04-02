'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:metodika1
 * @description
 * # metodika1
 */
angular.module('doctor3App')
    .component('metodika4', {
        templateUrl: 'views/templates/metodika4.html',
        // controller: Metodika1Controller,
        binding: {
            items: '<',
            myTitle: '@title'
        }
    });