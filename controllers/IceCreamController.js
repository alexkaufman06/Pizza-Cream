pizzaCream.controller('IceCreamCtrl', function IceCreamCtrl($scope, PizzaCreamFactory) {
  $scope.order = PizzaCreamFactory.iceCreamOrder;
  $scope.PizzaCreamFactory = PizzaCreamFactory;
  $scope.orderTotal = PizzaCreamFactory.iceCreamTotal;


  $scope.flavors = [ {name: "Cheese", price: 3},
                     {name: "Pepperoni", price: 4},
                     {name: "Sausage", price: 5}
                   ];
});
