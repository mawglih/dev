'use strict';

/**
 * @ngdoc directive
 * @name doctor3App.directive:testimonial1Open
 * @description
 * # testimonial1Open
 */
angular.module('doctor3App')
    .directive('testimonial3Open', function() {
        return {
            templateUrl: 'views/templates/testimonial3-open.html',
            restrict: 'E',
        };
    });