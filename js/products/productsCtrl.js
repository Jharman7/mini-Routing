var app = angular.module('miniRouting');
app.controller('productsCtrl', function ($scope, productsService, $stateParams) {
  if ($stateParams.id === 'shoes') {
    $scope.productData = productsService.shoeData;
  } else if ($stateParams.id === 'socks') {
    $scope.productData = productsService.sockData;
  }
})
