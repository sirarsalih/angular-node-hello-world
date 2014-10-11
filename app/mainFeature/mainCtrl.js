function mainController ($scope, $log, mainService) {
    $scope.message = "";

    $scope.getMessage = function() {
        mainService.get().success(function (response, status, headers, config) {
            $scope.message = response;
        }).error(function(){
            $log.debug("Error getting data!");
        });
    };

    $scope.postMessage = function() {
        mainService.post().success(function (response, status, headers, config) {
            $scope.message = response;
        }).error(function(){
            $log.debug("Error posting data!");
        });
    };
}