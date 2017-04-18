app.directive('item', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div ng-repeat="item in jobs">' +
        ' <a class="pull-left thumb-sm avatar m-l-n-md">'+
        '<img src="img/a6.jpg" class="img-circle" alt="...">'+
        '</a> <div class="m-l-lg m-b-lg"> <div class="m-b-xs">'+
        '<a href class="h4">广州市天河区五山钛晶灰汽车美容店</a>'+
        '<span class="text-muted m-l-sm pull-right">3h ago</span>'+
        '</div> <div class="m-b">'+
        '<div class="m-b">{{item}}'+'</div>'+
        '<div class="m-t-sm">'+
        '<a href class="text-muted m-xs"><i class="icon-action-redo"></i></a>'+
        '<a href class="text-muted m-xs"><i class="icon-star"></i></a>'+
        '<a href class="text-muted m-xs"><i class="icon-refresh"></i> 13</a>'+
        '</div> </div> </div> </div>',
        // template: '<div>Hi there</div>',
        scope:{
            // content:'@',
            // time:'@',
            jobs:'='
        },
        replace: true
    };
});