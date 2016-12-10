console.log('Loaded');

$(start);

var firstChoice = '';
var secondChoice = '';

function start() {
  $('li').on('click', cardChosen);
}

function cardChosen() {
  // if first choice is undefined - then store the class of the clicked item in firstChoice
  // if firstChoice is already defined - then store the class of the clicked item ins secondChoice and then see if they are equal.
  // if equal alert 'match', otherwise alert 'try again'
  // clear the values of firstChoice and secondChoice so that the player can check for another match.
  console.log($(this).attr('class'));
  if (!firstChoice){
    firstChoice = $(this).attr('class');
  }  else {
    secondChoice = $(this).attr('class');
    checkForMatch();
  }
}

function checkForMatch(){
  if (firstChoice === secondChoice){
    // alert('Match');
    $('#display').text('Match!!');
  } else {
    // alert('Try Again');
    $('#display').text('Try again!!');
  }
  firstChoice = '';
  secondChoice = '';
}
