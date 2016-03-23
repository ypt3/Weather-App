myApp.controller('homeController', function($scope, $location, cityService){

  $scope.city = cityService.city;

  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });

  $scope.submit = function(){
    $location.path("/forecast");
  };

});

myApp.controller('forecastController', function($scope, $resource, $routeParams, cityService, weatherService){

  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '2';

  $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

  $scope.convertToFahrenheit = function(dek) {
    return Math.round(1.8 * (dek - 273) + 32 );
  };

  $scope.convertToDate = function(dt) {
    return new Date(dt * 1000);
  };

});
