noteApp.controller('NotesEditController', function NotesEditController($scope, $route, nodesData) {
  $scope.notes = nodesData.getNotes($route.current.params.id);

});
