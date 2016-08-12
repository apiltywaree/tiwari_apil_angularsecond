/**
 * Created by apiltiwari on 8/1/16.
 */
angular.module('app').directive('formDirective', [function () {
    return {
        restrict: 'EA',
        templateUrl: "/tiwari_apil_angularsecond/views/form.html",
        link: function ($scope) {
            $scope.formSubmit=function () {
                var obj = {
                    'name': $scope.person.name,
                    'class': $scope.person.class,
                    'age': $scope.person.age
                };
                $scope.sampleArray.push(obj);
               console.log($scope.sampleArray);
            }
            alert('inside form.html');
        }
    }
}]);