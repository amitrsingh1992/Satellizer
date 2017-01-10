angular.module("dashboard").controller('dashboardCtrl',function () {

console.log("dashboardCtrl");
})
.controller("main",function ($scope,$auth) {
  $scope.isAuth=function () {
  return $auth.isAuthenticated();
  }
})
