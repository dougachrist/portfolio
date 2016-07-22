(function(module) {

  var projectsView = {};

  projectsView.handleAuthorFilter = function() {

  };

  projectsView.handleCategoryFilter = function() {

  };

  projectsView.setTeasers = function() {
    $('div.blogText').find('p').nextAll().hide();
    var $button = $('<button>Read More</button>');
    $button.addClass('collapsed');
    $('section').not('.template').append($button);
  };

  projectsView.renderIndexPage = function() {
    BuildArticle.allArticles.forEach(function(a) {
      $('main').append(a.toHtml('#blog-template'));
    });
    projectsView.setTeasers();
  };

  // projectsView.handleCategoryFilter();
  // projectsView.handleAuthorFilter();

  module.projectsView = projectsView;
})(window);
