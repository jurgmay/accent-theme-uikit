angular.module('flatpickr', []);

angular.module('flatpickr')
    .directive('flatpickrdate', flatpickrdate)
    .controller('FlatpickrCtrl', FlatpickrCtrl)
    .factory('FlatpickrService', FlatpickrService)
    .run(run)
    .config(config)
;

function flatpickrdate() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: FlatpickrCtrl
    };
    return directive;

    function template() {
        return [
            '<div>',
                '<input type="text" ng-model="flatpickrmodel" />',
            '</div>'
        ].join('');
    }
}

FlatpickrCtrl.$inject = ['$scope', 'FlatpickrService'];
function FlatpickrCtrl($scope, FlatpickrService) {
    $scope.flatpickrmodel = "Hello World!";

    FlatpickrService.method();
}

FlatpickrService.$inject = ['User'];
function FlatpickrService(User) {
    var service = {
        method: method
    };
    return service;

    function method() {

    }
}

run.$inject = ['$templateCache'];
function run($templateCache) {
    $templateCache.put('flatpickrView.html',
        '<div>{{flatpickrmodel}}</div>'
    );
}

config.$inject = ['$routeProvider'];
function config($routeProvider) {
    $routeProvider.
        when('/pathname', { templateUrl: 'flatpickrView.html', controller: 'FlatpickrCtrl' })
}
