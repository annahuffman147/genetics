var app = angular.module("genetics", []);

app.contoller('parents', function($scope){
  $scope.creatures = {
    redOneEye: "images/redOneEye.png"
    redTwoEye: "images/redTwoEye.png"
    redThreeEye: "images/redThreeEye.png"
    blueOneEye: "images/blueOneEye.png"
    blueTwoEye: "images/blueTwoEye.png"
    blueThreeEye: "images/blueThreeEye.png"
    yellowOneEye: "images/yellowOneEye.png"
    yellowTwoeye: "images/yellowTwoeye.png"
    yellowThreeEye: "images/yellowThreeEye.png"
  }
  $scope.children = {
    redOneEye: "images/redOneEye.png"
    redTwoEye: "images/redTwoEye.png"
    redThreeEye: "images/redThreeEye.png"
    blueOneEye: "images/blueOneEye.png"
    blueTwoEye: "images/blueTwoEye.png"
    blueThreeEye: "images/blueThreeEye.png"
    yellowOneEye: "images/yellowOneEye.png"
    yellowTwoeye: "images/yellowTwoeye.png"
    yellowThreeEye: "images/yellowThreeEye.png"
  }

  $scope.getRandomCreature = function(){
    return Math.floor((Math.random()*10)+1)
  }
})
