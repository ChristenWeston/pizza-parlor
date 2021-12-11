Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["broccoli", "garlic"], "vegan cheese", "tomato", "medium");
Expected Output: Pizza { toppings: ["broccoli", "garlic"], cheese: "vegan cheese", sauce: "tomato", size: "medium" }

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizzaSmall = new Pizza(["beyond meat sausage", "bell pepper", "chili flakes", "red onion"], "vegan cheese", "tomato", "small");
Expected Output: Pizza { toppings: [""beyond meat sausage", "bell pepper", "chili flakes", "red onion"], cheese: "vegan cheese", sauce: "tomato", size: "small" }

Describe: Pizza.prototype.pizzaOrder(pizza)

Test: "It should return the cost of the pizza based on the number of toppings and the size."
Code: Pizza.prototype.pizzaOrder(myPizza);
Expected Output: 12.5;

Test: "It should return the cost of the pizza based on the number of toppings and the size."
Code: Pizza.prototype.pizzaOrder(myPizzaSmall);
Expected Output: 12;