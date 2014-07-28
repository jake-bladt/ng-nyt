var timesSearch = angular.module('timesSearch', []);

timesSearch.controller('TimesSearchCtrl', function($scope) {
	$scope.stories = [
	  { "title": "Cats worshipped in Egypt"},
	  { "title": "Sacred Cats exhibit at the Brooklyn Museum"},
	  { "title": "Cats sacred, dogs profane"}
	];
});
