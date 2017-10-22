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
      // place focus in the field with an errror
      $('#name').focus();
    }
    else if ( !$('#question').val() ) {
      $('#error').text('Please answer the question!').show();
      // place focus in the field with an errror
      $('#question').focus();
    }
    else {
      // populate certificate with user's name, then show it
      var participant = $('#name').val();
      $('#participant').text(participant);
      $('#has-have').text('has');
      showModal();
    }

    // handle click on ok or close button within modal
    $('#ok, #close').on('click',function() {
      hideModal();
    });

  });

});

function showModal() {
  $('#modal').show();
  $('#modal-overlay').show();
  // place focus on first focusable element within modal
  $('#close').focus();
  // listen for tab key, and trap keyboard focus within dialog
  // In a dialog with more numerous or unknown controls,
  // could create an array of focusable controls within modal and move
  // forward or backward through the array as user presses
  // tab or shift+tab
  $('#modal button').on('keydown',function(e) {
    if (e.which === 9) { // tab
      e.preventDefault();
      if ($(this).attr('id') === 'ok') {
        // focus was on the ok button. move focus to close button
        $('#close').focus();
      }
      else {
        // focus was on the close button. move focus to ok button
        $('#ok').focus();
      }
    }
  });
}

function hideModal() {
  $('#modal').hide();
  $('#modal-overlay').hide();
}
