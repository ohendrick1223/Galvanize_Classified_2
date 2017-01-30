(function() {
  'use strict';

  angular.module('app')
    .component('postEdit', {
      controller: controller,
      templateUrl: 'js/classifieds/classifieds-edit.template.html'
    });

    controller.$inject = ['$http', '$state'];

    function controller($http, $state) {
      const vm = this;

      vm.$onInit = function() {
      };

      vm.submitPost = function() {
        console.log("getting to submitPost function");
        $http.post('/classifieds', vm.post).then(function(response) {
          console.log("getting inside post request", response.data);

          $http.get('/classifieds').then(function(response) {
            console.log("array of classifieds", response.data);
            vm.allPosts = response.data;
          });
        });
        $state.go('home');

      };
      //add state.go for home page after making a get request
    }
        //make http calls for posting, editing, get by id, deleting

    console.log("getting to classifieds-edit.component.js");
}()); //end of IIFE
