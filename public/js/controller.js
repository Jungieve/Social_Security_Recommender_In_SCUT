// 获取特定的用户信息
app.controller('userById', ['$scope', 'service_User', function($scope, User) {
    var user = User.query(function(){
        $scope.user = user;
    });
}]);
// 获取全部的工作信息
app.controller('jobs', ['$scope', 'service_Items', function($scope,Item) {
    var items = Item.query(function(){
        $scope.items = items;
    });
}]);

