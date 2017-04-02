'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:testimonial1Open
 * @description
 * # testimonial1Open
 */
angular.module('doctor3App')
    .directive('testimonial1Open', function() {
        return {
            templateUrl: 'views/templates/testimonial1-open.html',
            restrict: 'E',
        };
    });