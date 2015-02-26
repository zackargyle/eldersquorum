angular.module('cs2')
	.directive('loader', [
		'$rootScope',
		'$timeout',
		function($rootScope, $timeout) {
			return {
				restrict: 'E',
				replace: true,
				template: '<div ng-show="showLoader">' +
					'	<div ' +
					'		style="width: 8px;height:35px;margin-left:5px;display:inline-block"' +
					'		ng-style="{&quot;background-color&quot;:slate}"' +
					'		ng-repeat="slate in slates">' +
					'	</div>' +
					'</div>',
				link: function($scope) {
					$scope.slates = [
						'rgba(255,255,255,.4)',
						'rgba(255,255,255,.5)',
						'rgba(255,255,255,.6)',
						'rgba(255,255,255,.7)',
						'rgba(255,255,255,.6)',
						'rgba(255,255,255,.5)'
					];

					$scope.$on('loader-show', function(e) {
						$scope.showLoader = true;
						animate();
						e.preventDefault();
					});

					$scope.$on('loader-hide', function(e) {
						$scope.showLoader = false;
						e.preventDefault();
					});

					function animate() {
						$scope.slates.push($scope.slates.shift());
						if ($scope.showLoader) {
							$timeout(animate, 130);
						}
					}

				}
			};
		}
	]);