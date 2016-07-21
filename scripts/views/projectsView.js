(function(module) {

  var projectsView = {};

  projectsView.handleAuthorFilter = function() {

  };

  projectsView.handleCategoryFilter = function() {

  };

  projectsView.handleMainNav = function() {
      // loadHome();
    $('nav').click(function(event) {
      if ($(window).width() < 640) {
        $(this).toggleClass('activeState');
        console.log(this);
        $('.starfish').slideToggle(350);
      }
    });
  };

  projectsView.setTeasers = function() {

  };

  projectsView.renderIndexPage = function() {

  };

  projectsView.handleCategoryFilter();
  projectsView.handleAuthorFilter();
  projectsView.handleMainNav();
  projectsView.setTeasers();

  BuildArticle.fetchAll(projectsView.renderIndexPage);

  module.projectsView = projectsView;
})(window);
