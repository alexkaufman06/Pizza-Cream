pizzaCream.factory('PizzaCreamFactory', function PizzaCreamFactory() {
  var factory = {};
  factory.iceCreamOrder = [];
  factory.pizzaOrder = [];
  factory.pizzaTotal = 0;
  factory.iceCreamTotal = 0;

  factory.addFood = function() {
    var foodItem = { name: factory.foodInfo[0], type: factory.foodInfo[2] , price: factory.foodInfo[1] * factory.quantity, quantity: factory.quantity }
    if (foodItem.type === "Ice Cream") {
      factory.iceCreamTotal += foodItem.price;
      factory.iceCreamOrder.push(foodItem);
    } else {
      factory.pizzaTotal += foodItem.price;
      factory.pizzaOrder.push(foodItem);
    }
    factory.quantity = null;
  };

  return factory;
});
