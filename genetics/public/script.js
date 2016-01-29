var app = angular.module("genetics", []);

app.controller('parents', function($scope) {
  $scope.parents = [{
      image: "images/redOneEye.png"
    }, {
      image: "images/redTwoEye.png"
    }, {
      image: "images/redThreeEye.png"
    }, {
      image: "images/blueOneEye.png"
    }, {
      image: "images/blueTwoEye.png"
    }, {
      image: "images/blueThreeEye.png"
    }, {
      image: "images/yellowOneEye.png"
    }, {
      image: "images/yellowTwoeye.png"
    }, {
      image: "images/yellowThreeEye.png"
    }]

  $scope.children =[{
      image: "images/redOneEye.png"
    }, {
      image: "images/redTwoEye.png"
    }, {
      image: "images/redThreeEye.png"
    }, {
      image: "images/blueOneEye.png"
    }, {
      image: "images/blueTwoEye.png"
    }, {
      image: "images/blueThreeEye.png"
    }, {
      image: "images/yellowOneEye.png"
    }, {
      image: "images/yellowTwoeye.png"
    }, {
      image: "images/yellowThreeEye.png"
    }]

$scope.getRandomParent = function() {

  var randomNumber = Math.floor((Math.random() * $scope.parents.length))
  var image = $scope.parents[randomNumber].image
  console.log(image);
  $scope.currentImage = image

}
$scope.getRandomParent()

})
