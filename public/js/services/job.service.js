/**
 * Created by congzihan on 16/12/5.
 */
angular.module('myApp').factory('service_User', ['$resource',
    function ($resource) {
        return $resource('users/2b68a6cb-b6fd-4be1-9157-b84d4e257742', {}, {
            query: {
                method: 'GET'
            }
        });
    }
]);
angular.module('myApp').factory('service_Items', ['$resource',
    function ($resource) {
        return $resource('items/1', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
]);