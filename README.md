Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["broccoli", "garlic"], "vegan cheese", "tomato", "medium");
Expected Output: Pizza { toppings: ["broccoli", "garlic"], cheese: "vegan cheese", sauce: "tomato", size: "medium", cost: "12.5"}

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizzaSmall = new Pizza(["beyond meat sausage", "bell pepper", "chili flakes", "red onion"], "vegan cheese", "tomato", "small");
Expected Output: Pizza { toppings: [""beyond meat sausage", "bell pepper", "chili flakes", "red onion"], cheese: "vegan cheese", sauce: "tomato", size: "small", cost "12"}

Describe: Pizza.prototype.pizzaOrder()

Test: "It should return the cost of the pizza based on the number of toppings and the size."
Code: myPizza.pizzaOrder();
Expected Output: 12.5;

Test: "It should return the cost of the pizza based on the number of toppings and the size."
Code: Pizza.prototype.pizzaOrder(myPizzaSmall);
Code: myPizzaSmall.pizzaOrder();
Expected Output: 12;