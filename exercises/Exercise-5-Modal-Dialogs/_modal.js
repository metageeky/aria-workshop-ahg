$(document).ready(function() {

  // toggle supplemental text
  $('#text-control').on('click', function() {
    $('#supplemental-text').slideToggle('fast');
    if ($(this).attr('aria-expanded') === 'true') {
      $(this).attr('aria-expanded', 'false').html('Show more');
    } else {
      $(this).attr('aria-expanded', 'true').html('Show less');
    }
  });

  // handle form submission
  $('#submit').on('click',function(event) {

    event.preventDefault();

    // check for empty required fields
    if ( !$('#name').val() ) {
      $('#error').text('Please enter your name').show();
      // place focus in the field with an error
      $('#name').focus();
    }
    else if ( !$('#question').val() ) {
      $('#error').text('Please answer the question!').show();
      // place focus in the field with an error
      $('#question').focus();
    }
    else {
      // populate certificate with user's name, then show it
      var participant = $('#name').val();
      $('#participant').text(participant);
      $('#has-have').text('has');
      showModal();
    }

    // handle click on ok button within modal
    $('#ok').on('click',function() {
      hideModal();
    });
  });

});

function showModal() {
  $('#modal').show();
  $('#modal-overlay').show();
}

function hideModal() {
  $('#modal').hide();
  $('#modal-overlay').hide();
}


// @codekit-prepend "../Exercise-4-Forms/forms-solution.js";

