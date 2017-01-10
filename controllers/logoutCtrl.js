angular.module("dashboard").controller('logoutCtrl',function ($scope,$auth,$state) {
console.log("logoutCtrl");
$auth.logout().
then(function () {
  $state.go("login")
})
});
