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
      image: "images/yellowTwoEye.png"
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
      image: "images/yellowTwoEye.png"
    }, {
      image: "images/yellowThreeEye.png"
    }]

$scope.getRandomParent = function() {

  var randomNumber = Math.floor((Math.random() * $scope.parents.length))
  var image = $scope.parents[randomNumber].image
  console.log(image);
  $scope.currentImage = image

}

$scope.getRandomParent2 = function() {

  var randomNumber = Math.floor((Math.random() * $scope.parents.length))
  var image = $scope.parents[randomNumber].image
  console.log(image);
  $scope.currentImage2 = image

}
$scope.childEyes = function (){

  var isThree = false
  var isOne = false
  var isTwo = false

  if($scope.currentImage.indexOf('Three') != -1 || $scope.currentImage2.indexOf('Three') != -1 ){
    return "Three"
  } else if ($scope.currentImage.indexOf('Three') != -1 && $scope.currentImage.indexOf('One') != -1 || $scope.currentImage2.indexOf('One') != -1){
    return "One"
  } else {
    return "Two"
  }
  console.log(isThree)
  console.log(isOne)
  console.log(isTwo)
}
$scope.childColor = function (){
  var isBlue = false
  var isRed = false
  var isYellow = false

  if($scope.currentImage.indexOf('blue') != -1 || $scope.currentImage2.indexOf('blue') != -1 ){
    return "blue"
  } else if ($scope.currentImage.indexOf('blue') != -1 && $scope.currentImage.indexOf('red') != -1 || $scope.currentImage2.indexOf('red') != -1) {
    return "red"
  } else {
    return "yellow"
  }
  console.log(isBlue)
  console.log(isRed)
  console.log(isYellow)
}

$scope.addChildShow = false;
$scope.toggleAddChildShow = function() {
  $scope.addChildShow = !$scope.addChildShow;
};
$scope.getRandomParent()
$scope.getRandomParent2()
$scope.childEyes()
$scope.childColor()
// $scope.toggleAddChildShow()


})
