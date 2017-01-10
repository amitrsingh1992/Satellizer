angular.module("dashboard").controller('signupCtrl',function ($scope,$auth,$state) {
console.log("signupCtrl");
$scope.signupFunction=function(){
  console.log("signup....");
  $auth.signup($scope.data,{"url":"http://192.168.0.171:3000/signup"})
  .then(function () {
    $state.go("login");
  }).catch(function (data) {
    console.log(data);
  })
}

})
