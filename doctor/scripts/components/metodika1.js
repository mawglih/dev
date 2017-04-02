'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:metodika1
 * @description
 * # metodika1
 */
angular.module('doctor3App')
    .component('metodika1', {
        templateUrl: 'views/templates/metodika1.html',
        //controller: Metodika1Controller,
        binding: {
            items: '<',
            myTitle: '@title'
        }
    });