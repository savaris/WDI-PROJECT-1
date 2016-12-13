var Game = Game || {};


Game.pickBoxes = function() {
  var firstChoice = '';
  var secondChoice = '';
  console.log($(this).attr('id'));
  if (!firstChoice){
    firstChoice = $(this).attr('id');
  }  else {
    secondChoice = $(this).attr('id');
    this.match();
  }
};
// on first click, get clicked elements id and store in variable
// on the second click, get the clicked elements id and store in variable
// then we need to compare the two to see if they match <-- seperate function

Game.match = function(){
  if (firstChoice === secondChoice){
    // alert('Match');
    $('#display').html('Match!!');
  } else {
    // alert('Try Again');
    $('#display').html('Try again!!');
  }
  firstChoice = '';
  secondChoice = '';
};


Game.addListeners = function() {
  $('li').on('click', this.pickBoxes);
  // add a click event onto all li's on page
  // when a click has been made, we can call the function pickBoxes
  // .on('click', this.pickBoxes)
};


Game.createBoard = function(){
  for (var i = 0; i < this.boardBase * this.boardBase; i++) {
    $('ul').append('<li id='+ this.items[i] +'></li>');
  }

  this.addListeners();
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
  console.log(this);
  this.boardBase = 6;
  this.items     = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];

  this.shuffleArray(this.items);
};

$(Game.start.bind(Game));
