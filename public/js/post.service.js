(function() {
  'use strict';

  angular.module('app')
  .service('postService', function($http) {
    this.allPosts = [];
    this.submitPost = function(post) {
      return $http.post('/classifieds', post).then(function(response) {
        console.log("getting inside post request", response.data);
        this.allPosts = response.data;
        console.log(response.data);
      });
    };
    this.editPost = function(id) {
      console.log("getting to edit");
      // var editId = req.params.id;
      // console.log(editId);

      $http.patch(`classifieds/${editId}`).then(function(response) {
        console.log("edited: ", response.data);
      });
    };
  });

}()); //end of IIFE
