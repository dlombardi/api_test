'use strict';

var app = angular.module('test', []);

app.controller('MainController', ['$scope', '$window', '$http', function ($scope, $window, $http) {

  $scope.submit = function (user) {
    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/sessions',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: user
    }).then(function (data) {
      console.log("data: ", data);
      // auth.saveToken(data.sessionId);
    });
  };
}]);