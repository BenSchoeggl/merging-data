/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

"use strict";

var addressBook = angular.module('AddressBook', []);
addressBook.controller('addressBookController', ['$scope', function($scope) {
    $scope.employees = pawneeEmployees;
    $scope.sortCol = 'lastName';
    $scope.sortBy = function(sortCol) {
        if ($scope.sortCol == sortCol) {
            $scope.sortReverse = !$scope.sortReverse;
        } else {
            $scope.sortCol = sortCol;
            $scope.sortReverse = false;
        }
    }
    $scope.isSortedBy = function(colName) {
        return colName == $scope.sortCol;
    }
}]);