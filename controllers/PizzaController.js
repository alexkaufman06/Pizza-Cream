pizzaCream.controller('PizzaCtrl', function PizzaCtrl($scope, PizzaCreamFactory) {
  $scope.order = PizzaCreamFactory.pizzaOrder;
  $scope.PizzaCreamFactory = PizzaCreamFactory;
  $scope.orderTotal = PizzaCreamFactory.pizzaTotal;

  $scope.pizzas = [ {name: "Vanilla", price: 3},
                    {name: "Rocky Road", price: 4},
                    {name: "Cookie Dough", price: 5}
                  ];
});
