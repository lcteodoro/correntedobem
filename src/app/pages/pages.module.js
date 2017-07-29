/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.profile',
    'BlurAdmin.pages.entidades',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    baSidebarServiceProvider.addStaticItem({
      title: 'Paginas',
      icon: 'ion-document',
      subMenu: [{
        title: 'Entrar',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Me Cadastrar',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'Meu Perfil',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    /*
    baSidebarServiceProvider.addStaticItem({
      title: 'Menu ',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });
    */
  }

})();
