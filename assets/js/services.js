'use strict';

var weatherServices = angular.module('weatherServices', ['ngResource']);

weatherServices.factory('Weather', ['$resource',
    function ($resource) {
        return $resource('http://api.openweathermap.org/data/2.5/weather?appid=:appId&q=:cityName', {appId: '@appId'}, {
            query: {
                method: 'GET',
                params: {
                    cityName: '@cityName'
                }
            }
        });
    }]
);