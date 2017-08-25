'use strict';

angular.module('noteApp').config(function($routeProvider){
  $routeProvider
  .when('/notes', {
    templateUrl: 'templates/Notes.html',
    controller: 'NotesController'
  })
  .when('/notes/new', {
    templateUrl: 'templates/NotesNew.html',
    controller: 'NotesCreateController'
  })
  .when('/notes/:id', {
    templateUrl: 'templates/NotesShow.html',
    controller: 'NotesShowController'
  })
  .when('/notes/:id/edit', {
    templateUrl: 'templates/NotesEdit.html',
    controller: 'NotesEditController'
  })
  .otherwise({
    redirectTo: '/notes'
  })
});
