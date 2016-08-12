/**
 * Created by apiltiwari on 8/1/16.
 */
angular.module('app').directive('resultDirective', [function () {
    return {
        restrict: 'EA',
        templateUrl: "/tiwari_apil_angularsecond/views/result.html",
        link: function ($scope) {
            alert('inside result.html');
        }
    }
}]);