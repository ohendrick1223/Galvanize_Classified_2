(function() {
  'use strict';

  angular.module('app')
    .component('classifieds', {
      controller: controller,
      templateUrl: 'html/classifieds.template.html'
    });

    controller.$inject = ['$http'];

    function controller($http) {
      const vm = this;

      vm.$onInit = function() {
        //get all classifieds
      };
    }
        //make http calls for posting, editing, get by id, deleting

    console.log("getting to classifieds.component.js");
}()); //end of IIFE
