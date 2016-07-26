(function(module) {

  var loadHome = {
    render: function () {
      $('section').not('.template').remove();
      var $section = $('<section class="imgHome"></section>'); // MAKE a DIV HERE
      var $div = $('<div></div>');
      var $img = $('<img>');
      $img.attr('src','images/aboutMe.png');
      var $h1Portfolio = $('<h1>PORTFOLIO</h1>');
      $div.append($img);
      $div.append($h1Portfolio);
      $section.append($div);
      $('html').attr('class','home');
      $('main').append($section);
    }
  };

  module.loadHome= loadHome;
})(window);
