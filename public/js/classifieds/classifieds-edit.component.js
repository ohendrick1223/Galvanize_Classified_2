(function() {
  'use strict';

  angular.module('app')
    .component('postEdit', {
      controller: controller,
      templateUrl: 'js/classifieds/classifieds-edit.template.html'
    });

    controller.$inject = ['$http', '$state', 'postService'];

    function controller($http, $state, postService) {
      const vm = this;

      vm.$onInit = function() {
      };
      vm.submitPost = postService.submitPost;


      //add state.go for home page after making a get request
    }
        //make http calls for posting, editing, get by id, deleting

    console.log("getting to classifieds-edit.component.js");
}()); //end of IIFE
