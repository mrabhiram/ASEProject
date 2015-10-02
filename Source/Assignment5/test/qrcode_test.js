	describe("qrcode", function() {
beforeEach(module('QRCode'));

var $controller;

beforeEach(inject(function function_name (_$controller_) {
	$controller = _$controller_;
}));

describe('qrcode',function() {
it('tests the qrcode', function() {
	var $scope = {};
	$scope.name = localStorage.getItem('UserName');
	var controller = $controller('qrcode', {$scope: $scope});
	expect($scope.username).toEqual($scope.name);

});

});

describe('qrcode',function() {
it('tests the qrcode image source', function() {
	var $scope = {};
	var controller = $controller('qrcode', {$scope: $scope});
	var img_src = $scope.img_src;

	expect(img_src).toEqual("");

});

});

describe('qrcode',function() {
it('if image source is empty, it means no text is entered', function() {
	var $scope = {};
	var controller = $controller('qrcode', {$scope: $scope});
	var img_src = $scope.img_src;
	var pin = $scope.pin;
	expect(pin).toEqual(null);



});

});



});