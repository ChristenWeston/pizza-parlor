//Business Logic
function Pizza(toppings, cheese, sauce, size) {
  this.toppings = toppings;
  this.cheese = cheese;
  this.sauce = sauce;
  this.size = size;
  //toppingsNumber = this.numberOfToppings();
}
/*
Pizza.prototype.numberOfToppings = function() {
  this.toppingsNumber = parseInt(this.toppings.length);
  return this.toppingsNumber;
}*/

Pizza.prototype.pizzaOrder = function(pizza) {
  let cost = 0.00;
  let numberOfToppings = 0;
  let toppingsCost = 0.00;
  
  if (pizza.size === "small") {
    cost += 7.00;
  }
  else if (pizza.size === "medium") {
    cost += 10.00;
  }
  else if (pizza.size === "large") {
    cost += 13.00;
  }
  else {
    console.log("No pizza size!");
  }

  numberOfToppings += parseInt(pizza.toppings.length);
  console.log(numberOfToppings);
  toppingsCost += numberOfToppings * 1.25;
  console.log(toppingsCost);

  cost += toppingsCost;
  return cost;
}