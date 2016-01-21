angular.module('ecommerceApp').service('productsSvc', function($http) {
    
    this.getProducts = function() {
        return $http.get('/products');
    }
    
    this.postProducts = function(name, description, price) {
        return $http.post('/products', name, description, price);
    }
    
    this.removeProduct = function(id) {
        return $http.delete('/products/' + id);
    }
    
    this.editProduct = function(id) {
        return $http.put('/products/' + id)
    }
})