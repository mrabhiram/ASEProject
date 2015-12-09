angular.module('starter.controllers', ['ngSanitize', 'ngCordova'])

.controller('scanidCtrl', function($scope,$state,$cordovaBarcodeScanner) {
    $scope.storeinQR =function() {
     document.getElementById("qrimg").src ="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+$scope.username+"" ; 
         }
      $scope.scanid = function() {
            console.log("inside create");
           $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        
        // Success! Barcode data is here
      }, function(error) {
        // An error occurred
      });


    // NOTE: encoding not functioning yet
    $cordovaBarcodeScanner
      .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      .then(function(success) {
        // Success!
      }, function(error) {
        // An error occurred
      });

        }
          $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
    
})

.controller('LoginCtrl', function($scope, $state,$http,$window,$httpParamSerializerJQLike) {
    $scope.data = {};
      console.log("inside login cntrl function");
 // $scope.pageClass = 'login';
    $scope.login = function(username,password) {
        //console.log("inside login function");
        inside.getMethod();
        $http({
    method: 'GET',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
    contentType: "application/json"
}).success(function(response) {
     var list=response;
    for(i=0;i<list.length;i++){
         if((list[i].username==username) && (list[i].password==password))
        {
           localStorage.setItem("username",list[i].username);
            localStorage.setItem("firstname",list[i].firstname);
             localStorage.setItem("lastname",list[i].lastname);
             localStorage.setItem("address",list[i].address);
             localStorage.setItem("age",list[i].age);
             localStorage.setItem("email",list[i].email);
            //alert("Login success");
            //location.href="home.html";
            console.log("inside if loop");
            $state.go('adminhome');
        }
        else{
            //alert("Incorrect username/password");
              console.log("inside else loop");
      document.getElementById('x').innerHTML="<P>Invalid Creditials! Please try again....</p>";
         }
    }
        })
     
    }
})
// end of login controller
//begin of adminhome controller
.controller('adminhomeCtrl', function($scope, $state) {
  $scope.data = {};
  $scope.pageClass = 'register';
    $scope.register = function() {
        console.log("inside adminhome");
         $state.go('register');
               
}
      $scope.pageClass = 'access';
        $scope.access = function() {
        console.log("student login!");
         $state.go('admin');             
}

      $scope.pageClass = 'scan';
        $scope.access = function() {
        console.log("student scan!");
         $state.go('scan');             
}

            $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
     
})

.controller('scanCtrl', function($scope, $state, $cordovaBarcodeScanner ) {
 
 $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
     
})

//end of adminhome controller
// begin of student login
.controller('StudentLoginCtrl', function($scope, $state,$http,$window,$httpParamSerializerJQLike) {
    $scope.data = {};
      console.log("inside student login cntrl function");
    $scope.pageClass = 'studentlogin';
    $scope.studentlogin = function(username,password) {
        //console.log("inside login function");
          inside.getMethod();
        $http({
    method: 'GET',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
    contentType: "application/json"
}).success(function(response) {
     var list=response;
    for(i=0;i<list.length;i++){
         if((list[i].username==username) && (list[i].password==password))
        {
           localStorage.setItem("username",list[i].username);
            localStorage.setItem("id_user",list[i]._id.$oid);
            localStorage.setItem("firstname",list[i].firstname);
             localStorage.setItem("lastname",list[i].lastname);
             localStorage.setItem("address",list[i].address);
             localStorage.setItem("age",list[i].age);
             localStorage.setItem("email",list[i].email);
            //alert("Login success");
            //location.href="home.html";
            console.log("inside if loop");
            $state.go('studenthome');
        }
        else{
            //alert("Incorrect username/password");
              console.log("inside else loop");
      document.getElementById('x').innerHTML="<P>Invalid Creditials! Please try again....</p>";
         }
    }
        })
     
    }
})
//begin of register controller
.controller('RegisterCtrl', function($scope, $state,$http,$window,$httpParamSerializerJQLike) {
 // $scope.data = {};
  $scope.pageClass = 'register';
    $scope.register = function(firstname,lastname,address,age,email,username,password) {
       // $state.go('home');
          //console.log("inside register function");
        inside.postMethod();
        $http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
    data: JSON.stringify({
                "firstname":firstname,
                "lastname":lastname,
                "address":address,
                "age":age,
                "email":email,
                "username":username,
                "password":password
            }),
    contentType: "application/json"
}).success(function() {
    $scope.firstname ="";
    $scope.lastname="";
    $scope.address="";
    $scope.age="";
    $scope.email ="";
    $scope.username="";
    $scope.password ="";
     
    alert("User created successfully ");
            $state.go('main');
    //$scope.msg ="User created successfully";
    //$window.location.href="index.html";
        })    
    }
    $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
})


  //end of register controller
.controller('MainCtrl', function($scope, $state) {
  $scope.data = {};
  $scope.pageClass = 'admin';
    $scope.admin = function() {
        console.log("inside admin");
         $state.go('login');
               
}
      $scope.pageClass = 'student';
        $scope.student = function() {
        console.log("student login!");
         $state.go('studentlogin');             
}
              
})

  //end of register controller
//begin of admin controller
.controller('adminCtrl', function($scope, $state,$http,$window,$httpParamSerializerJQLike) {
  $scope.data = {};
  $scope.pageClass = 'student';
    $scope.student = function(username) {
    $http({
    method: 'GET',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
    contentType: "application/json"
}).success(function(response) {
     var list=response;
    for(i=0;i<list.length;i++){
         if((list[i].username==username))
        {
           localStorage.setItem("username",list[i].username);
            localStorage.setItem("id_user",list[i]._id.$oid);
            //alert("Login success");
            //location.href="home.html";
            console.log("inside if loop");
            console.log(list[i]._id.$oid);
            $state.go('access');
        }
         else{
            //alert("Incorrect username/password");
              console.log("inside else loop");
         }
           
}
              
})
}
                $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
})
//end of admin controller
//begin of access controller
.controller('accessCtrl', function($scope, $state,$http,$window,$httpParamSerializerJQLike) {
  $scope.data = {};
  $scope.pageClass = 'edit';
            $scope.edit = function() {
        console.log("inside edit");
         $state.go('adminedit');
               
}
      $scope.pageClass = 'delete';
        $scope.delete = function() {
        var id=localStorage.getItem("id_user");
$http({
    method: 'DELETE',
    url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/'+id+'?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',   
    contentType: "application/json"
}).success(function() {
   
    alert("Delete success!");
    console.log("delete success");
    $state.go("adminhome");
       })           
}
            $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
              
}) 
//end of access controller
//
.controller('ViewidCtrl', function($scope, $state) {
    console.log("view");
    var id=localStorage.getItem("id_user");
    var username1=localStorage.getItem("username");
      var firstname1=localStorage.getItem("firstname");
      var lastname1=localStorage.getItem("lastname");
      var address1=localStorage.getItem("address");
      var age1=localStorage.getItem("age");
      var email1=localStorage.getItem("email");
     console.log(username1);
  $scope.firstname ="<b>Firstname: </b> "+firstname1;
    $scope.lastname ="<b>Lastname: </b>"+lastname1;
    $scope.address ="<b>Address: </b>"+address1;
    $scope.age ="<b>Age: </b>"+age1;
    $scope.email ="<b>Email: </b>"+email1;
    $scope.username=username1;
           $scope.storeinQR =function() {
     document.getElementById("qrimg").src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+$scope.username+"" ; 
         }
    //console.log(storeinQR);  

        $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
    
    
    
    
    
})
//
//begin of adminedit controller
.controller('admineditCtrl', function($scope, $state,$http,$window,$httpParamSerializerJQLike) {
     $scope.pageClass = 'edit';
    $scope.edit = function(firstname,lastname,address,age,email,password) {
         var id=localStorage.getItem("id_user");
        var username1=localStorage.getItem("username");
        console.log(id);
        $http({
    method: 'PUT',
    url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/'+id+'?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
    data: JSON.stringify({
                "firstname":firstname, 
                "lastname":lastname,
                "address":address,
                "age":age,
                "email":email,
                "username":username1,
                "password":password
            }),
   
    contentType: "application/json"
    
    
}).success(function() {
    $scope.firstname ="";
    $scope.lastname="";
    $scope.address="";
    $scope.age="";
    $scope.email ="";
    $scope.password ="";
    alert("update successful");
    $state.go("adminhome");
       })
} 
        $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
})
//begin of update controller
.controller("UpdateCtrl", function ($scope,$state,$http,$window,$httpParamSerializerJQLike) {

    $scope.pageClass = 'update';
$scope.update = function(firstname,lastname,address,age,email,password) {
    
    var id=localStorage.getItem("id_user");
    var username1=localStorage.getItem("username");
   //console.log("inside update function");
    inside.putMethod();
$http({
    method: 'PUT',
    url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/'+id+'?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
    data: JSON.stringify({
                "firstname": firstname, 
                "lastname":lastname,
                "address":address,
                "age":age,
                "email":email,
                "username":username1,
                "password":password
            }),
   
    contentType: "application/json"
    
    
}).success(function() {
    $scope.firstname ="";
    $scope.lastname="";
    $scope.address="";
    $scope.age="";
    $scope.email ="";
    $scope.username="";
    $scope.password ="";
    alert("update successful");
    $state.go("studenthome");
       })
}
    $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
}) 
//end of update controller     

//begin of studenthome controller

.controller("StudenthomeCtrl", function ($scope,$http,$state,$window,$httpParamSerializerJQLike) {

    $scope.pageClass = 'delete';
$scope.delete = function() {
    
   var id=localStorage.getItem("id_user");
   //console.log("inside delete function");
    inside.deleteMethod();
$http({
    method: 'DELETE',
    url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/'+id+'?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
    contentType: "application/json"
}).success(function() {
   
    alert("Delete success!");
    console.log("delete success");
    $state.go("main");
       })
}
$scope.update = function(){
   $state.go("update"); 
}
      $scope.pageClass = 'viewid';
        $scope.viewid = function() {

        console.log("viewbutton!");
            
         $scope.storeinQR =function() {
     document.getElementById("qrimg").src ="https://api.qrserver.com/v1/create-qr-code/?data="+$scope.username+"&amp;size=500x500" ; 
         }
         $state.go('viewid');             
}
  $scope.data = {};
  $scope.pageClass = 'scanid';
    $scope.scanid = function() {
        console.log("scanid button");
                 $scope.storeinQR =function() {
     document.getElementById("qrimg").src ="https://api.qrserver.com/v1/create-qr-code/?data="+$scope.username+"&amp;size=500x500" ; 
         }
         $state.go('scanid');
               
}
               
    $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("student logout!");
         $state.go('main');
    }
var storageFactory = new StorageFactory();
        var localstorage = storageFactory.createStorage({});
    $scope.username1=localstorage.username;
    
    
var adminName = Admin.getInstance();  
  //console.log(user.fullName()); // true
  
  $scope.firstname = adminName.firstName;
  $scope.lastname = adminName.lastName;
})
;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

