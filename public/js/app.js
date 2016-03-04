var app = angular.module('ngChecklist',
[]);
app.controller('ChecklistController',
function($scope){
  $scope.checkList = ['rake the yard',
                      'take a nap',
                      'take another nap',
                      'walk the dog',
                      'eat that leftover meatloaf']
$scope.savehecklist = function() {
    var ChecklistInfo = $scope.currentTodo;
    $scope.checkList.push(todoInfo);
    $scope.currentChecklist = "";
}

$scope.removeChecklist = function(singleTodo){
  var position = $scope.checkList.indexOf(singleTodo);
  $scope.checkList.splice(position,1);
}

$scope.editChecklist = function(singleChecklist){
  $scope.currentChecklist = singleChecklist;
  $scope.removeChecklist(singleChecklist);
}

$scope.moveUp = function(singleChecklist){
  var index = $scope.todoList.indexOf(singleChecklist);
  $scope.todoList.splice(index,1);
  $scope.todoList.splice(index-1, 0, singleChecklist);

}
});
