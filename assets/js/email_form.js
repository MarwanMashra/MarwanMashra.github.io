(function ($) {
    $(document).ready(function() {
      $('#contact_form').submit(function () {
        params={
          'subject':$('#input-subject').val().trim(),
          'name': $('#input-name').val().trim(),
          'reply_email': $('#input-email').val().trim(),
          'message': $('#input-message').val().trim()

        }
        emailjs.send('gmail', 'gmail_template', params, 'user_333j7kVsYvCPmuQqAc0rn')
          .then(function(response) {
            $('#input-subject').val("");
            $('#input-name').val("");
            $('#input-email').val("");
            $('#input-message').val("");
            Fnon.Hint.Success("Your message was sent 👍",{
              position:"right-bottom",
              fontSize: '16px',
              animationDuration: 300,
              displayDuration: 4000,
              progressColor: 'rgba(255,255,255,0)',
              callback:function(){}
            }); 
          }, function(error) {
            Fnon.Hint.Danger("Error, something went wrong 😢", {
              position:"right-bottom",
              fontSize: '16px',
              animationDuration: 300,
              displayDuration: 4000,
              progressColor: 'rgba(255,255,255,0)',
              callback:function(){}
            });  
          });
        return false;
      });
  });
  })(jQuery);