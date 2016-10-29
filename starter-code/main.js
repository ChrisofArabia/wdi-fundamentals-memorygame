// console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var isMatch = function(selectedCard) {
  'use strict';
  // alert winning/losing message
  if (selectedCard[0] === selectedCard[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
};

var isTwoCards = function() {
  'use strict';
  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="king.jpg">'; // king
  }
  else {
    this.innerHTML = '<img src="queen.jpg">'; //queen
  }

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay); // pass the cardsInPlay as an argument to isMatch function
    cardsInPlay = []; // clear cards in play array for next try
  }
};

// Create board & cards
var createCards = function() {
  'use strict';
  var gameBoard = document.getElementById( 'game-board' );

  for( var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div'); // create a new div tag
    cardElement.className = 'card'; // give the div a class name
    cardElement.setAttribute('data-card', cards[i]); // set the data-card to its card value, king or queen
    cardElement.addEventListener('click', isTwoCards); // add event listener to the card
    gameBoard.appendChild(cardElement); // add the div to the game bord
  }
};

createCards();