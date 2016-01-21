angular.module('ecommerceApp').directive('adminDir', function(){
    
    return {
        templateUrl: 'js/views/admin.html',
        restrict: 'E',
        scope: {
                
        },
        controller: function($scope, productsSvc) {
            productsSvc.getProducts().then(function(response){
                $scope.products = response.data;
            })
            
            $scope.submitProduct = function(name, description, price) {
		        productsSvc.postProducts(name, description, price).then(function(response){
                alert("Item added!");
                $scope.addName = '';
                $scope.addDescription = '';
                $scope.addPrice = '';
                })
	           }
            
            $scope.removeProduct = function(id) {
                productsSvc.removeProduct(id);
                productsSvc.getProducts().then(function(response){
                $scope.products = response.data;
                
               })
              }
            
             $scope.editProduct = function(id) {
                productsSvc.editProduct(id);
                productsSvc.getProducts().then(function(response){
                $scope.products = response.data;
                
               })
            }
    }
    }
})