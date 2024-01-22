/*Pickle1 Pickle2 Pickle3 Pickle4*/ 

const deckElement = document.getElementById('deck');
const tableauElement = document.getElementById('tableau');

// Fetching card data from the local JSON file to generate image
const API = "http://localhost:3000/cards";

/*mvp word*/

function getSuitSymbol(suit) {
    // Map suits to Unicode symbols
    const suitSymbols = {
        hearts: '\u2665',
        diamonds: '\u2666',
        clubs: '\u2663',
        spades: '\u2660',
    };
    return suitSymbols[suit] || '';
}


// Fetch card attributes from the JSON file
fetch(API) 
  .then(response => response.json())
  .then(data => {
    
    const cardAttributes = data.cards; 

    const playingCards = cardAttributes.map((attributes) => {
      return {
        suit: attributes.suit,
        rank: attributes.rank,
  })
  .catch(error => console.error(w));

function createCards(cardsData) {
  cardsData.forEach((card, json) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = `${card.rank} of ${card.suit}`;

    // Add drag event to the cards
    cardElement.addEventListener('mousedown', startDragging);
    cardElement.addEventListener('mouseup', stopDragging);

    // Append the card to the container
    cardContainer.appendChild(cardElement);
  });
}


// Placeholder functions for drag events
let isDragging = false;
let offsetX, offsetY, draggedElement;

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


var s = [];

// build waste pile
var w = [];

// build foundations
var spades = [];
var hearts = [];
var diamonds = [];
var clubs = [];

// build table
var t = [];
t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = [];

// build table
var table = [];
table['stock'] = s;
table['waste'] = w;
table['spades'] = spades;
table['hearts'] = hearts;
table['diamonds'] = diamonds;
table['clubs'] = clubs;
table['tab'] = t;

// initial face up cards
var playedCards =
'#waste .card,' +
'#fnd .card,' +
'#tab .card:last-child';


