(function() {
  'use strict';

  angular.module('app')
    .component('edit', {
      controller: controller,
      templateUrl: 'js/classifieds/classifieds-edit.template.html'
    });

    controller.$inject = ['$http', '$state', 'postService'];

    function controller($http, $state, postService) {
      const vm = this;

      vm.$onInit = function() {
      };
      vm.editPost = postService.editPost;
    }

    console.log("getting to classifieds-edit.component.js");
}()); //end of IIFE
