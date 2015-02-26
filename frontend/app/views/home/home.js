
/*  Home Controller  */

angular.module('cs2')
  .controller('HomeCtrl', [ '$scope', '$http',
   function ($scope, $http) {

   	localStorage = localStorage || {};

   	// Load Presidency Info
		$http.get('resources/presidency.json')
			.then(function(res) {
				$scope.presidency = res.data;
			});

		// Load verse of the day
		$http.get('resources/verses.json')
			.then(loadVerseOfTheDay);
		
		function loadVerseOfTheDay(res) {
			var url = 'http://scriptures.desh.es/api/v1/'
				,	index = Math.floor(Math.random() * res.data.length)
				,	scripture = res.data[index];

			$http.get(url + scripture.slug)
				.then(function(res) {
					console.log(res);
					$scope.verses = res.data;
					$scope.reference = scripture.ref;
				});
		}

		$scope.stripNumber = function(num) {
			return num.replace(/[^0-9]/g, '');
		};
  }]);
