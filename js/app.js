var Game = Game || {};
var firstChoice;
var secondChoice;
var score = 0;

Game.pickBoxes = function() {
  $(this).html('<img class="cardImage" src="images/image' + $(this).attr('id') + '.png"/>');
  $(this).css('backgroundColor', '');

  if (!firstChoice){
    firstChoice = $(this).attr('id');
  } else {
    secondChoice = $(this).attr('id');
    Game.match();
  }
};

Game.match = function(){
  if (firstChoice === secondChoice){
    $('#display').html('Match');
    // var audio = new Audio('sounds/theme.wav');
    // audio.play();
    score = score + 1;
    $('#score').text(score);
    if (score === 15) $('#display').text('Congratulations, You\'ve found all the pairs.');
  } else {
    setTimeout(function(firstChoice, secondChoice){
      var selector = '#' + firstChoice + ', #' + secondChoice;
      $(selector).html('');
      $(selector).css('backgroundColor', '');
    }, 1000, firstChoice, secondChoice);
    $('#display').html('Try Again');
    // var audio = new Audio('sounds/theme.wav');
    // audio.play();
  }
  firstChoice = '';
  secondChoice = '';
};


Game.addListeners = function() {
  $('ul').on('click', 'li.card', this.pickBoxes);
  $('#reset').on('click', this.reset);
};

Game.reset = function(){
  $('ul').html('');
  Game.shuffleArray(Game.items);
  firstChoice = '';
  secondChoice = '';
};

Game.createBoard = function(){
  score = 0;
  for (var i = 0; i < this.boardBase * this.boardHeight; i++) {
    $('ul').append('<li class="card" id='+ this.items[i] +'></li>');
  }
};

Game.shuffleArray = function(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }

  this.createBoard();
};

Game.start = function(){
  this.boardBase = 6;
  this.boardHeight = 5;
  this.items     = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];
  this.shuffleArray(this.items);
  this.addListeners();
};


$(Game.start.bind(Game));
