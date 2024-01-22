/*Pickle*/ 

const cardContainer = document.getElementById('cardContainer');

// Fetching card data from the local JSON file to generate image
fetch('path/to/cards.json') // Update with the correct file path
  .then(response => response.json())
  .then(cardsData => {
    const shuffledCards = shuffle(cardsData);

    const stack = document.createElement('div');
    stack.classList.add('card-stack');

    // Position 
    stack.style.left = `${(window.innerWidth - 100) / 2}px`;
    stack.style.top = `${(window.innerHeight - 150) / 2}px`;

    shuffledCards.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.style.backgroundImage = `url(${card.img})`;

      // Position of each card in a cascading manner 
      cardElement.style.left = `${index * 20}px`;
      cardElement.style.top = `${index * 10}px`;

      // Drag event to the cards
      cardElement.addEventListener('mousedown', startDragging);
      cardElement.addEventListener('mouseup', stopDragging);

      // Append the card to the stack
      stack.appendChild(cardElement);
    });

    // Click event 
    stack.addEventListener('click', drawCard);

    // Append the stack to the card container
    cardContainer.appendChild(stack);
  })
  .catch(error => console.error('Error fetching card data:', error));

// Adding shuffle
function shuffle(array) {
  // shuffle algorithm
  return array;
}

// Drawing a card
function drawCard() {
  // Implement your logic for drawing a card
  console.log('Card drawn!');
}

// Variables for handling drag events
let isDragging = false;
let offsetX, offsetY, draggedElement;

// Functions for drag events
function startDragging(e) {
  e.preventDefault();
  isDragging = true;
  draggedElement = this;
  offsetX = e.clientX - draggedElement.getBoundingClientRect().left;
  offsetY = e.clientY - draggedElement.getBoundingClientRect().top;
}

function stopDragging() {
  if (isDragging) {
    isDragging = false;
    draggedElement = null;
  }
}

document.addEventListener('mousemove', (e) => {
  if (isDragging && draggedElement) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    draggedElement.style.left = x + 'px';
    draggedElement.style.top = y + 'px';
  }
});
