(function(module) {

  var loadContact = {
    render : function() {
      $('section').not('.template').remove();
      var $section = $('<section></section>');
      var $form = $('<form id="formData"><fieldset></fieldset></form>');
      var $textarea = $('<textarea id="comment" placeholder="write something nice here.." ></textarea>');
      var $submit =$('<input type="submit" value="Send">');
      $form.append($textarea);
      $form.append($submit);
      var $h1 = $('<h1></h1>');
      $h1.text('Contact Me');
      var $h2 = $('<h2></h2>');
      $h2.text('Fill out the form below to send me a message:');
      $section.append($h1);
      $section.append($h2);
      $section.append($form);
      $('html').attr('class','contact');
      $('main').append($section);

      $('#formData').submit(function(event) {
        event.preventDefault();
        $('#comment').val('');
      });

    }
  };



  module.loadContact = loadContact;
})(window);
