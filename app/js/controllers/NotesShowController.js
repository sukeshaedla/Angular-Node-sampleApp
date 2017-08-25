'use strict';

noteApp.controller('NotesShowController', function NotesShowController($scope, $route, nodesData) {
  $scope.notes = nodesData.getNotes($route.current.params.id);
  
});
