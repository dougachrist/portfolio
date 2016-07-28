(function(module) {

  var loadMainNav = {
    render: function () {
      $('nav').click(function(event) {
        if ($(window).width() < 640) {
          $(this).toggleClass('activeState');
          $('.starfish').slideToggle(350);
        }
      });
    }
  };

  module.loadMainNav = loadMainNav;
})(window);
