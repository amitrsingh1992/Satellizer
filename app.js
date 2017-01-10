var dashboard = angular.module("dashboard",["ui.router","satellizer"]);
dashboard.config(function ($stateProvider) {
  var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    deferred.reject();
  } else {
    deferred.resolve();
  }
  return deferred.promise;
}];

var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    deferred.resolve();
  } else {
    $location.path('/login');
  }
  return deferred.promise;
}];
  $stateProvider
  .state('login',{
    url:'/login',
    templateUrl:'template/login.html',
    controller:'loginCtrl',
    resolve: {
     skipIfLoggedIn: skipIfLoggedIn
   }
  })
  .state('logout',{
    url:'/logout',
    controller:'logoutCtrl'
  })
  .state('signup',{
    url:'/signup',
    templateUrl:'template/signup.html',
    controller:'signupCtrl',
    resolve: {
     skipIfLoggedIn: skipIfLoggedIn
   }
  })
  .state('dashboard',{
    url:'/dashboard',
    templateUrl:'template/dashboard.html',
    controller:'dashboardCtrl',
    resolve: {
      loginRequired: loginRequired
    }
  })
})
