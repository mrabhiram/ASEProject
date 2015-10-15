// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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

.controller('register', function ($scope,$http) {

    
    $scope.register = function () {
              alert("successfully entered");
       var username =  document.getElementById('username').value;
            var password = document.getElementById('password').value;
        var student_name = document.getElementById('student_name').value;

            $http({ 
                    method: 'POST',
                    url: 'https://api.mongolab.com/api/1/databases/umkcid/collections/student_details?apiKey=-NcHz5Vcw6sJZLoA0IJ1JmbVAYskM_lM',
                data: JSON.stringify({
                                
                            student_id: username,
                            name: student_name,
                            password: password
           
            }),
                contentType: "application/json"
                
    }).success(function (){
            alert("successfully registered");
    });

            


    					};

	
    
})



.controller('login', function ($scope,$http) {

    
    $scope.login = function () {
        
       var username =  document.getElementById('username2').value;
            var password = document.getElementById('password2').value;
        

            $http({ 
                    method: 'GET',
                    url: 'https://api.mongolab.com/api/1/databases/umkcid/collections/student_details?apiKey=-NcHz5Vcw6sJZLoA0IJ1JmbVAYskM_lM'
                }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
                var users=response.data;
                //alert(users.length + " " + users[0].name);
                
                var i;
                var flag=0;
                for(i=0;i<users.length;i++)
                {
                    if(username==users[i].student_id)
                    {
                       if(password==users[i].password)
                       {
                        
                           
                           alert("login successful");
                           flag=1;
//                           window.location.assign("home.html")
                           break;
                           
                       }
                    }
                }
                if(flag==0)
                     alert("Incorrect username, password combination.");
                //alert(JSON.stringify(response.data[0]));
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
            


    					};

	
    
})


