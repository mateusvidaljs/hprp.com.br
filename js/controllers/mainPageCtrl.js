angular.module("hprpsite").controller("mainPageCtrl", function($scope){
	$scope.server_status_1 = 'ON';
	$scope.server_status_2 = 'ON';
	$scope.forum_link = 'http://forum.hprp.com.br';
	
	$scope.init = function(){
		$scope.getPing();
	};

	$scope.setNewWhitelist = function(){

	};

	$scope.getPing = function(){
		
	};
});