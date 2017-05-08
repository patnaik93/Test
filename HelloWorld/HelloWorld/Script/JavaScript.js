/// <reference path="angular.min.js" />

var myApp = angular.module("ModuleName", []); //module and its dependencies

var control = function ($scope) {
    var employee = {
        firstName: "Charith",
        lastName: "Patnaik",
        age: "23",
        pic: "C:\Users\ppatnaik\Source\Repos\Test\HelloWorld\HelloWorld\Images\Charith.png"
    };
    $scope.emp = employee;
    $scope.message = "Employee Details";
};

myApp.controller("ControllerName", control); //myApp is module and control is controller function 