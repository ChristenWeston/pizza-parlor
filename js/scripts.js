//Business Logic
function Pizza(toppings, cheese, sauce, size) {
  this.toppings = toppings;
  this.cheese = cheese;
  this.sauce = sauce;
  this.size = size;
  //toppingsNumber = this.numberOfToppings();
  cost = this.pizzaOrder();
}

Pizza.prototype.pizzaOrder = function() {
  this.cost = 0.00;
  let numberOfToppings = 0;
  let toppingsCost = 0.00;
  
  if (this.size === "small") {
    this.cost += 7.00;
  }
  else if (this.size === "medium") {
    this.cost += 10.00;
  }
  else if (this.size === "large") {
    this.cost += 13.00;
  }
  else {
    console.log("No pizza size!");
  }

  numberOfToppings += parseInt(this.toppings.length);
  console.log(numberOfToppings);
  toppingsCost += numberOfToppings * 1.25;
  console.log(toppingsCost);

  this.cost += toppingsCost;
  return this.cost;
}

//User Interface Logic