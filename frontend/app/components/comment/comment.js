angular.module('cs2')
	.directive('comment', [
		function(Comments, User) {
			return {
				restrict: 'E',
				replace: true,
				templateUrl: 'components/comment/comment.html',
				link: function($scope) {

				}
			};
		}]);