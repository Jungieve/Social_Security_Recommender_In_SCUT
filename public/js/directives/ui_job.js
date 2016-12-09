app.directive('job', function () {
    return {
        restrict: 'E',
        template: '<div> <a class="pull-left thumb-sm avatar m-l-n-md">'+
        '<img src="img/a6.jpg" class="img-circle" alt="...">'+
        '</a> <div class="m-l-lg m-b-lg"> <div class="m-b-xs">'+
        '<a href class="h4">Jessica</a>'+
        '<span class="text-muted m-l-sm pull-right">3h ago</span>'+
        '</div> <div class="m-b">'+
        '<div class="m-b">Cecteter adipiscing elit, sed diam</div>'+
        '<div class="m-t-sm">'+
        '<a href class="text-muted m-xs"><i class="icon-action-redo"></i></a>'+
        '<a href class="text-muted m-xs"><i class="icon-star"></i></a>'+
        '<a href class="text-muted m-xs"><i class="icon-refresh"></i> 13</a>'+
        '</div> </div> </div> </div>',
        // template: '<div>Hi there</div>',
        replace: true
    };
});