/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.entidades', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('entidades', {
          url: '/entidades',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          title: 'Entidades',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('entidades.pesquisa', {
          url: '/pesquisa',
          templateUrl: 'app/pages/entidades/smart/tables.html',
          title: 'Pesquisa',
          sidebarMeta: {
            order: 100,
          },
        });
    $urlRouterProvider.when('/entidades','/entidades/pesquisa');
  }

})();
