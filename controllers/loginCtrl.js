angular.module("dashboard").controller('loginCtrl',function ($scope,$auth,$state,$timeout) {
console.log("loginCtrl...");
$scope.loginFunction=function(){
  $scope.loginProcess = true;
  $scope.loginFailed = false;
  console.log($scope.data);
  $auth.login($scope.data,{"url":"http://192.168.0.171:3000/login"})
  .then(function () {
    $state.go("dashboard");
  }).catch(function (data) {
    $scope.loginProcess = false;
    $timeout(function () {
      $scope.loginFailed = false;

    },2000);

    $scope.loginFailed = true;
    console.log(data);
  })
}

});
