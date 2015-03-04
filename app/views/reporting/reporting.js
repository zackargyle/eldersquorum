
/*  Member Directory Controller  */

angular.module('cs2')
  .controller('ReportingCtrl', ['$scope', '$http',
   function ($scope, $http) {
		var trelloAPI = 'https://api.trello.com/1';
		var trelloQuery = '?token=95257ca3f965f0595d04dfd59a6129aaa4a7054f3ea92f8a4eb8ac7349688a9b&key=5fe32205aa9a10a42ffdb4d8638d1aef';

		$scope.toggleState = function(card, checkitem) {
			var newState = (checkitem.state === 'complete') ? 'incomplete' : 'complete';
			// Update remote
			var url = trelloAPI;
			url += '/cards/' + card.id;
			url += '/checklist/' + card.checklistId;
			url += '/checkItem/' + checkitem.id + '/state';
			$http.put(url + trelloQuery + '&value=' + newState)
				.then(function(res) {
					checkitem.state = res.data.state;
				});
		};

		function getTrelloData() {
			var url = trelloAPI + '/board/zk9vE04n';
			var query = trelloQuery +'&lists=open&cards=visible&card_checklists=all';

			$http.get(url + query).then(function(res) {
				$scope.hometeachers = res.data.lists.slice(2);
				linkCards(res.data.cards);
			});
		}

		function linkCards(cards) {
			angular.forEach(cards, function(card) {
				var whiteList = ['54ee197fd0c046a0c117f36e', '54ee197fd0c046a0c117f36f'];
				if (whiteList.indexOf(card.idList) !== -1) return ;

				var hometeachers = $scope.hometeachers[findHTById(card.idList)];

				if (hometeachers.families === undefined) {
					hometeachers.families = [];
				}

				hometeachers.families.push({
					id: card.id,
					name: card.name,
					checklistId: card.checklists[0].id,
					visits: card.checklists[0].checkItems
				});
			});
		}

		function findHTById(id) {
			for (var i = 0; i < $scope.hometeachers.length; i++) {
				if ($scope.hometeachers[i].id === id) {
					return i;
				}
			}
		}

		getTrelloData();
   }]);