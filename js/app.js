var Game = Game || {};
var firstChoice;
var secondChoice;
var score = 0;

Game.pickBoxes = function() {
  $(this).toggleClass('card');
  $(this).html('<img class="cardImage" src="images/image' + $(this).attr('id') + '.png"/>');
  $(this).css('backgroundColor', '');
  if (!firstChoice){
    firstChoice = $(this).attr('id');
  }  else {
    secondChoice = $(this).attr('id');
    Game.match();
  }
};

Game.match = function(){
  if (firstChoice === secondChoice){
    $('#display').html('Match');
    $('#score').text(++score);
  } else {
    var $lis = $('li');
    for (var i = 0; i < $lis.length; i++) {
      if ($($lis[i]).attr('id') === firstChoice || $($lis[i]).attr('id') === secondChoice){
        $($lis[i]).attr('class', 'card');
        setTimeout(function(){
          $('.card').html('');
          $('.card').css('backgroundColor', '');
        }, 1000);
      }
    }
    $('#display').html('Try Again');
  }
  firstChoice = '';
  secondChoice = '';
};


Game.addListeners = function() {
  $('ul').on('click', 'li.card', this.pickBoxes);
  $('#reset').on('click', Game.reset);
};

Game.reset = function(){
  $('ul').html('');
  Game.shuffleArray(Game.items);
  firstChoice = '';
  secondChoice = '';
};

Game.createBoard = function(){
  score = 0;
  for (var i = 0; i < this.boardBase * this.boardBase; i++) {
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
  this.items     = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];
  this.shuffleArray(this.items);
  this.addListeners();
};


$(Game.start.bind(Game));
