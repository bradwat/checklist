var app = angular.module('dogCheckList', []);

 app.controller('ChecklistController', function($scope){

   $scope.dogs = [
    {
      name: 'T.J.',
      gotMeds: false
    },
    {
      name: 'Lola',
      gotMeds: false
    },
   {
      name: 'Gypsy',
      gotMeds: false
     },
    {
       name: 'Lucy',
        gotMeds: false
     },
   {
      name: 'Sophie',
      gotMeds: false
    },
   ];

   $scope.addDogToMedsList = function(){
     $scope.dog.gotMeds = false;
     $scope.dogs.push($scope.dog);
     $scope.dog = {};
   }
   $scope.removeChecklist = function(singleChecklist){
     var position = $scope.checklist.indexOf(singleChecklist);
     $scope.checklist.splice(position,1);
   }

   $scope.editChecklist = function(singleChecklist){
     $scope.currentChecklist = singleChecklist;
     $scope.removeChecklist(singleChecklist);
   }

   $scope.moveUp = function(singleChecklist){
     var index = $scope.checklist.indexOf(singlechecklist);
     $scope.checklist.splice(index,1);
     $scope.checklist.splice(index-1, 0, singleChecklist);

   }
   });
