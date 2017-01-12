angular.module("dashboard").controller('signupCtrl',function ($scope,$auth,$state,$timeout) {
console.log("signupCtrl");
$scope.signupFunction=function(){
  $scope.signupProcess=true;
  console.log("signup....");
  $auth.signup($scope.data,{"url":"http://192.168.0.171:3000/signup"})
  .then(function () {
    $state.go("login");
  }).catch(function (data) {
    console.log(data);
    $timeout(function () {
      $scope.signupProcess = false;
    },2000);
    // $scope.signupProcess=false;
});
}
});
