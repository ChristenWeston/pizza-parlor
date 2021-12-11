Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["broccoli", "garlic"], "vegan cheese", "tomato", "medium");
Expected Output: Pizza { toppings: ["broccoli", "garlic"], cheese: "vegan cheese", sauce: "tomato", size: "medium" }

Describe: Pizza.prototype.pizzaOrder(pizza)

Test: "It should return the cost of the pizza based on the number of toppings and the size."
Code: Pizza.prototype.pizzaOrder(myPizza);
Expected Output: 12.5;