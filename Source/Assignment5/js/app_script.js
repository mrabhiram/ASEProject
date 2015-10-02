angular.module('QRCode', [])
.controller('qrcode', function ($scope, $http) {

//        document.getElementById('username').innerHTML += localStorage.getItem('UserName');  
     // $scope.initialize = function () {
     //    $scope.username = localStorage.getItem('UserName'); 
     //    console.log($scope.username);
     //    document.getElementById('username').innerHTML = "Hi";
     // };
    $scope.username =  localStorage.getItem('UserName');
    $scope.img_src = "";
    $scope.pin = document.getElementById('pin');
$scope.storeinQR = function() {
 document.getElementById("qrimg").src = "https://api.qrserver.com/v1/create-qr-code/?data="+document.getElementById("pin").value +"&amp;size=100x100" ; 
 $scope.img_src = document.getElementById("qrimg").src ;
}

$scope.getdetails = function () {

         $http.get('http://api.zippopotam.us/us/'+document.getElementById("pin").value).success(function(data) {
            console.log(data);
            document.getElementById("country").innerHTML = data.country;
            document.getElementById("place").innerHTML = data.places[0]['place name'];
            document.getElementById("state").innerHTML = data.places[0].state;
            document.getElementById("lat").innerHTML = data.places[0].latitude;
            document.getElementById("lng").innerHTML = data.places[0].longitude;
         })                     

};

$scope.viewQR = function () {
$http.get('http://api.qrserver.com/v1/read-qr-code/?fileurl='+document.getElementById("qrimg").src).success(function(data) {
          console.log(data[0].symbol[0].data);
         // document.getElementById("country").innerHTML = data[0].symbol[0].data;
})
};
});
