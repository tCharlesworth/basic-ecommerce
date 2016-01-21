angular.module('ecommerceApp', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){
    
        $stateProvider
            .state('home', {
                url: '/',
                template: '<home-dir></home-dir>'
            })
            .state('admin', {
                url: '/admin',
                template: '<admin-dir></admin-dir>'
            })
            .state('login', {
                url:'/login',
                template: '<login-dir></login-dir>'
            })
        
        $urlRouterProvider
            .otherwise('/');
    
})