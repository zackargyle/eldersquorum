
/*  Member Directory Controller  */

angular.module('cs2')
  .controller('MembersCtrl', ['$scope', '$http', 'API',
   function ($scope, $http, API) {
		$http.get(API + '/members', {cache: true})
			.then(function(res) {
				$scope.members = res.data;
			});
   }]);