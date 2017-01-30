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
  });

}()); //end of IIFE
