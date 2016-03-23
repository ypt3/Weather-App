myApp.service('cityService', function(){

  this.city = "Sunnyvale, CA";

});

myApp.service('weatherService', ['$resource', function($resource){

  this.GetWeather = function(city, days) {
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=28f947bb6d9710318c7808c0fcc4c5dc", { callback: 'JSON_CALLBACK'}, {get: { method: 'JSONP'}});

    return weatherResult = weatherAPI.get({ q: city, cnt: days });
  };

}]);
