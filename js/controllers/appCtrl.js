/**
 * Created by apiltiwari on 8/1/16.
 */
angular.module('app').controller('appCtrl', ['$scope', function ($scope) {
    $scope.sampleArray = [{
        'name': 'john',
        'class': 'java',
        'age': '32'
    },
        {
            'name': 'mark',
            'class': 'ui',
            'age': '33'
        }
    ];
    $scope.searchText = "";
    $scope.person = {
        'name': 'apil',
        'class': 'java',
        'age': '25'
    };
}]);