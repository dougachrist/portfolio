(function(module) {

  var loadContact = {
    render : function() {
      var $section = $('<section></section>');
      var $form = $('<form><fieldset></fieldset></form>');
      var $textarea = $('<textarea placeholder="write something nice here.." ></textarea>');
      $form.append($textarea);
      var $h1 = $('<h1></h1>');
      $h1.text('Contact Me');
      var $h2 = $('<h2></h2>');
      $h2.text('Fill out the form below to send me a message:');
      $section.append($h1);
      $section.append($h2);
      $section.append($form);
      $('html').attr('class','contact');
      $('main').append($section);
    }
  };

  module.loadContact = loadContact;
})(window);
