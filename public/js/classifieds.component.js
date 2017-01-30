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
      };
    }
        //make http calls for posting, editing, get by id, deleting
}()); //end of IIFE
