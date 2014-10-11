'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('mainController', mainController);

myApp.factory('mainService', mainService);

myApp.directive('mainDirective', mainDirective);