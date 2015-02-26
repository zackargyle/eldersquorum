
/*  Member Directory Controller  */

angular.module('cs2')
  .controller('ReportingCtrl', ['$scope', '$http', 'API',
   function ($scope, $http, API) {
		$scope.report = {};

		// Get member list
		$http.get(API + '/members', {cache: true})
			.then(function(res) {
				$scope.members = res.data;
				$scope.report.member = res.data[0];
			});

		$scope.submitReport = function() {
			if (confirm("Ready to submit?")) {
				$http.post(API + '/report', $scope.report);
			}
		};

   }]);