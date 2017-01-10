angular.module("dashboard").controller('loginCtrl',function ($scope,$auth,$state) {
console.log("loginCtrl...");
$scope.loginFunction=function(){
  console.log($scope.data);
  $auth.login($scope.data,{"url":"http://192.168.0.171:3000/login"})
  .then(function () {
    $state.go("dashboard");
  }).catch(function (data) {
    console.log(data);
  })
}

});
