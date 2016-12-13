var Game = Game || {};
var firstChoice;
var secondChoice;

Game.pickBoxes = function() {
  $(this).toggleClass('card');
  $(this).html('<img class="cardImage" src="images/image' + $(this).attr('id') + '.png"/>');
  $(this).css('backgroundColor', 'red');
  if (!firstChoice){
    firstChoice = $(this).attr('id');
  }  else {
    secondChoice = $(this).attr('id');
    Game.match();
  }
};
// on first click, get clicked elements id and store in variable
// on the second click, get the clicked elements id and store in variable
// then we need to compare the two to see if they match <-- seperate function

Game.match = function(){
  console.log('running');
  if (firstChoice === secondChoice){
    // alert('Match');
    $('#display').html('Match!!');
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
    // alert('Try Again');
    $('#display').html('Try again!!');
  }
  firstChoice = '';
  secondChoice = '';
};


Game.addListeners = function() {
  $('ul').on('click', 'li.card', this.pickBoxes);
  // add a click event onto all li's on page
  // when a click has been made, we can call the function pickBoxes
  // .on('click', this.pickBoxes)
  $('#reset').on('click', Game.reset);
};

Game.reset = function(){
  $('ul').html('');
  Game.shuffleArray(Game.items);
  firstChoice = '';
  secondChoice = '';
};

Game.createBoard = function(){
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
