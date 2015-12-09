// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  

  .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
  })
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
    .state('access', {
      url: '/access',
      templateUrl: 'templates/access.html',
      controller: 'accessCtrl'
  })
    .state('scan', {
      url: '/scan',
      templateUrl: 'templates/scan.html',
      controller: 'scanCtrl'
  })
  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
  })
   .state('admin', {
      url: '/admin',
      templateUrl: 'templates/admin.html',
      controller: 'adminCtrl'
  })
   .state('adminhome', {
      url: '/adminhome',
      templateUrl: 'templates/adminhome.html',
      controller: 'adminhomeCtrl'
     
  })
     .state('adminedit', {
      url: '/adminedit',
      templateUrl: 'templates/adminedit.html',
      controller: 'admineditCtrl'
     
  })
   .state('studenthome', {
      url: '/studenthome',
      templateUrl: 'templates/studenthome.html',
      controller: 'StudenthomeCtrl'
    
  })
    .state('studentlogin', {
      url: '/studentlogin',
      templateUrl: 'templates/studentlogin.html',
      controller: 'StudentLoginCtrl'
    
  })
    .state('update', {
      url: '/update',
      templateUrl: 'templates/update.html',
      controller: 'UpdateCtrl'
    
  })
  
      .state('viewid', {
      url: '/viewid',
      templateUrl: 'templates/viewid.html',
      controller: 'ViewidCtrl'
    
  })
  
      .state('scanid', {
      url: '/scanid',
      templateUrl: 'templates/scanid.html',
      controller: 'scanidCtrl'
    
  })

  $urlRouterProvider.otherwise('/main');

});