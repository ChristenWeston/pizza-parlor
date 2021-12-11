//Business Logic
function Pizza(toppings, cheese, sauce, size) {
  this.toppings = [toppings];
  this.cheese = cheese;
  this.sauce = sauce;
  this.size = size;
}

Pizza.prototype.pizzaOrder = function(pizza) {
  let cost = 0.00;
  let numberOfToppings = parseInt(pizza.toppings.length) + 1;
  let toppingsCost = numberOfToppings * 1.25;
  
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

  cost += toppingsCost;
  return cost;
}