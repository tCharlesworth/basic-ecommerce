angular.module('ecommerceApp').directive('homeDir', function(){
    
    return {
        templateUrl: 'js/views/home.html',
        restrict: 'E',
        controller: function($scope, productsSvc) {
            productsSvc.getProducts().then(function(response){
                $scope.products = response.data;
                console.log(response);
            })
        }
    }  
})