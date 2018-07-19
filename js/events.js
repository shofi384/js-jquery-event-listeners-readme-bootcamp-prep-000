function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $(document).ready( function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
<<<<<<< HEAD
  $('form:first').on('keydown', function(key) {
    if(key.which === 71) {
=======
  $('form:first').on('keydown', function() {
    if($('input:first').val() === 'G') {
>>>>>>> 7c5e4f73d325c060025d13184a44c98a6c100997
      alert('You presssed G');
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
