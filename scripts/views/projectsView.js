(function(module) {

  var projectsView = {};

  projectsView.handleAuthorFilter = function() {

  };

  projectsView.handleCategoryFilter = function() {

  };

  projectsView.renderReadMoreButton = function () {
    $(this).prev().find('p').nextAll().hide();
    $(this).text('Read More');
    $(this).removeAttr('class');
    $(this).addClass('collapsed');
  };

  projectsView.renderShowLessButton = function () {
    $(this).prev().find('p').nextAll().show();
    $(this).text('Show Less');
    $(this).removeAttr('class');
    $(this).addClass('expanded');
  };

  projectsView.setTeasers = function() {
    $('div.blogText').find('span').nextAll().hide();
    var $button = $('<button>Read More</button>');
    $button.addClass('collapsed');
    $('section').not('.template').append($button);
  };

  projectsView.renderIndexPage = function() {
    $('section').not('.template').remove();
    BuildArticle.allArticles.forEach(function(a) {
      $('main').append(a.toHtml('#blog-template'));
      $('html').attr('class','projects');
    });
    projectsView.setTeasers();
    $(document).on('click', '.collapsed', projectsView.renderShowLessButton);
    $(document).on('click', '.expanded', projectsView.renderReadMoreButton);
  };

  // projectsView.handleCategoryFilter();
  // projectsView.handleAuthorFilter();

  module.projectsView = projectsView;
})(window);
