myApp.config(['$routeProvider', function ($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeController'
  })
  .when('/forecast', {
    templateUrl: 'views/forecast.html',
    controller: 'forecastController'
  })
  .when('/forecast/:days', {
    templateUrl: 'views/forecast.html',
    controller: 'forecastController'
  })
  .otherwise({
    redirectTo: '/'
  });

}]);
