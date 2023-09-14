// Funcion para mostrar el platillo seleccionado en el HTML
function displaySelectedDish(selectedDish) {
  const selectedDishElement = document.getElementById("selectedDish");
  selectedDishElement.innerHTML = `
                <h2>You selected: ${selectedDish.name}</h2>
                <img src="${selectedDish.image}" alt="${selectedDish.name}">
                <p>${selectedDish.description}</p>
                <p>Price: $${selectedDish.price}</p>
                <p>Calories: ${selectedDish.calories}</p>
                <p>Fat: ${selectedDish.fat}g</p>
                <p>Carbs: ${selectedDish.carbs}g</p>
                <p>Protein: ${selectedDish.protein}g</p>
            `;
}

// Prompt para seleccionar un restaurante
const restaurantOptions = popularRestaurants.map(
  (restaurant, index) => `${index + 1}. ${restaurant.name}`
);
// La /n se usa para "newline" en vez de ","
const promptMessage = `Select a popular restaurant chain:\n${restaurantOptions.join(
  "\n"
)}`;
const selectedOption = prompt(promptMessage);

if (selectedOption !== null && !isNaN(selectedOption)) {
  const selectedRestaurantIndex = parseInt(selectedOption, 10) - 1;

  if (
    selectedRestaurantIndex >= 0 &&
    selectedRestaurantIndex < popularRestaurants.length
  ) {
    // Prompt para seleccionar un platillo del restaurante seleccionado
    const restaurant = popularRestaurants[selectedRestaurantIndex];
    const dishOptions = restaurant.menu.map(
      (item, index) => `${index + 1}. ${item.name}`
    );
    const dishPromptMessage = `Select a dish from ${
      restaurant.name
    }:\n${dishOptions.join("\n")}`;
    const selectedDishOption = prompt(dishPromptMessage);

    if (selectedDishOption !== null && !isNaN(selectedDishOption)) {
      const selectedDishIndex = parseInt(selectedDishOption, 10) - 1;

      if (
        selectedDishIndex >= 0 &&
        selectedDishIndex < restaurant.menu.length
      ) {
        const selectedDish = restaurant.menu[selectedDishIndex];
        displaySelectedDish(selectedDish);
      } else {
        alert("Invalid dish selection.");
      }
    } else {
      alert("Dish selection closed.");
    }
  } else {
    alert("Invalid restaurant selection.");
  }
} else {
  alert("Menu closed.");
}
