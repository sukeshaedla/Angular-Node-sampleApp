'use strict';

noteApp.controller('NotesController', function NotesController($scope, nodesData, $route) {
  console.log($route.current.params);
  $scope.notesList =  nodesData.getAllNotes();
  console.log($scope.notes);
});

//
// noteApp.controller('NotesController', function NotesController($scope, Note, $route) {
//   Note.getNotes($route.current.params.id)
//   .then(function successCallback(response){
//     $scope.notesList = response.data;
//     console.log('in success');
//     console.log($scope.notesList);
//   }, function errorCallback(response){
//     console.log('when error occured');
//     console.log(response);
//   });
// });
