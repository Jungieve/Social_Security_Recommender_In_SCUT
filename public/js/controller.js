app.controller('test', ['$scope', 'Job', function($scope, Jobs) {
    var jobs = Jobs.query(function(){
        $scope.jobs = jobs;
    });
}]);

