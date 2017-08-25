'use strict';

noteApp.factory('nodesData', function ($resource) {
  var resource = $resource('/getNotes:id', {id: '@id'});
  return {
    getNotes: function(noteId){
      return resource.get({id:noteId});
      // return resource.query();
    },
    getAllNotes: function(){
    	return resource.query();
    }
  }
})

// noteApp.factory('Note', function ($http) {
//   // var resource = $resource('/getNotes:id', {id: '@id'});
//   return {
//     getNotes: function(noteId){
//       return $http.get('/getNotes'+noteId);
//       //return resource.query();
//       // return resource.get({id:noteId});
//     }
//   }
// })
