(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());

  repoView.renderRepos = function() {
    $('section').not('.template').remove();
    $('html').attr('class','repo');
    $('main').append(
    reposObj.withTheAttribute('forks')
    .map(repoCompiler)
    );
  };

  module.repoView = repoView;
})(window);
