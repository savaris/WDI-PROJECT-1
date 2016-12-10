console.log('Loaded');

$(start);

function start() {
  $('li').on('click', addListeners);
}

function addListeners() {
  console.log($(this).attr('id'));
}
