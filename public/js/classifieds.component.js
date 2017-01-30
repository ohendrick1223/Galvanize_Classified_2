(function() {
  'use strict';

  angular.module('app')
    .component('classifieds', {
      controller: controller,
      templateUrl: '/html/classifieds.template.html'
    });

    controller.$inject = ['$http'];

    function controller($http) {
      const vm = this;

      vm.$onInit = function() {
        console.log('i am running');
        $http.get('/classifieds').then(function(response) {
          console.log("array of classifieds", response.data);
          vm.allPosts = response.data;
        });
      };

      vm.deletePost = function(id) {
        console.log("I am getting to Delete");
        var postId = id;
        console.log(postId);

        $http.delete(`classifieds/${postId}`).then(function(response) {
          console.log("deleted: ", response.data);
          $http.get('/classifieds').then(function(response) {
            console.log("array of classifieds", response.data);
            vm.allPosts = response.data;
          });
        });
      };
    }
        //make http calls for posting, editing, get by id, deleting

}()); //end of IIFE
