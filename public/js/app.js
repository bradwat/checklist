var app = angular.module('dogCheckList', []);
 +
 +app.controller('ChecklistController', function($scope){
 +
 +  $scope.dogs = [
 +    {
 +      name: 'T.J.',
 +      gotMeds: false
 +    },
 +    {
 +      name: 'Lola',
 +      gotMeds: false
 +    },
 +    {
 +      name: 'Gypsy',
 +      gotMeds: false
 +    },
 +    {
 +      name: 'Lucy',
 +      gotMeds: false
 +    },
 +    {
 +      name: 'Sophie',
 +      gotMeds: false
 +    },
 +  ];
 +
 +  $scope.addDogToMedsList = function(){
 +    $scope.dog.gotMeds = false;
 +    $scope.dogs.push($scope.dog);
 +    $scope.dog = {};
 +  }
 +  // $scope.savechecklist = function() {
 +  //     var ChecklistInfo = $scope.currentChecklist;
 +  //     $scope.checkList.push(checklistInfo);
 +  //     $scope.currentChecklist = "";
 +  //   }
 +
 +
 +});
