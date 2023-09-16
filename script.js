// Define a mapping between pizza bases and image URLs
const baseImages = {
    'thin-crust': 'https://png.pngtree.com/thumb_back/fw800/background/20230902/pngtree-large-thin-crust-pizza-cut-in-four-slices-image_13157761.jpg',
    'thick-crust': 'https://toppng.com/uploads/preview/pizza-png-11553999344wb73hs4lcy.png',
};

// Function to allow dropping items into the circle
function allowDrop(event) {
    event.preventDefault();
}

// Function to start the drag when an item is dragged
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Function to handle dropping items into the circle
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const pizzaImage = document.getElementById('pizza-image');
    
    // Change the pizza image based on the pizza base
    if (baseImages[data]) {
        pizzaImage.src = baseImages[data];
        pizzaImage.alt = data;
    }

    // Display selected items (pizza base and ingredients) in a list
    const selectedItems = document.getElementById('selected-items');
    const listItem = document.createElement('li');

    if (data === 'thin-crust' || data === 'thick-crust') {
        listItem.textContent = `Pizza Name: ${data}`;
    } else {
        listItem.textContent = `Ingredient: ${data}`;
    }

    selectedItems.appendChild(listItem);
}
