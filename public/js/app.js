$scope.savehecklist = function() {
    var ChecklistInfo = $scope.currentChecklist;
    $scope.checkList.push(checklistInfo);
    $scope.currentChecklist = "";
