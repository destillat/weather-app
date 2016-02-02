'use strict';

var weatherDirectives = angular.module('weatherDirectives', ['ngResource']);

weatherDirectives.directive('weather', function() {
    return {        
        templateUrl: 'templates/weather-info.html'
    };
});