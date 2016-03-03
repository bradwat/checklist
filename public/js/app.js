var position = $scope.todoList.indexOf(singleTodo);
$scope.todoList.splice(position,1);
}

$scope.editTodo = function(singleTodo){
$scope.currentTodo = singleTodo;
$scope.removeTodo(singleTodo);
}

$scope.moveUp = function(singleTodo){
var index = $scope.todoList.indexOf(singleTodo);
$scope.todoList.splice(index,1);
$scope.todoList.splice(index-1, 0, singleTodo);

}
});
