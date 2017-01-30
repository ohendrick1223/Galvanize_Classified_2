(function() {
  'use strict';

  angular.module('app')
    .component('postEdit', {
      controller: controller,
      templateUrl: 'js/classifieds/classifieds-edit.template.html'
    });

    controller.$inject = ['$http'];

    function controller($http) {
      const vm = this;

      vm.$onInit = function() {
        //get all classifieds
      };
    }
        //make http calls for posting, editing, get by id, deleting

    console.log("getting to classifieds-edit.component.js");
}()); //end of IIFE
