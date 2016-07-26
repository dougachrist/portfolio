(function(module) {

  var loadAboutMe = {
    render: function () {
      $('section').not('.template').remove();
      var $section = $('<section></section>');
      var $img = $('<img>');
      $img.attr('src','images/aboutMe.jpg');
      var $h1 = $('<h1></h1>');
      $h1.text('About Me');
      var $body = $('<div class="blogText"></div>');
      $body.html('<p>I was born and rasied Santa Barbara, California, and will never lose my So. Cal roots although I now live in Seattle. I moved to the Pacific North West in June of 2016 to start learning how to code at Code Fellows, a bootcamp for learning HMTL CSS and Javascript. Each day we work on a new project that challenges us to discover something new about the coding . I love coding, and will apply the skills I gain this summer when I start business school in the Fall.</p>');
      $section.append($h1);
      $section.append($img);
      $section.append($body);
      $('html').attr('class','aboutMe');
      $('main').append($section);
    }
  };

  module.loadAboutMe = loadAboutMe;
})(window);
