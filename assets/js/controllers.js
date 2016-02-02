'use strict';

var weatherControllers = angular.module('weatherControllers', []);

weatherControllers.controller('WeatherInfoCtrl', ['$scope', 'Weather',
  function($scope, Weather) {
    var appId = '8e5497b5c939060be72f256c2b525eee';
    $scope.$watch('cityName', function(value) {
        $scope.info = Weather.query({
            appId: appId,
            cityName: value
        });
    });    
  }]);