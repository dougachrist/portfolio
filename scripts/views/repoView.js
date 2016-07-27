(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());

  repoView.renderRepos = function() {
    $('section').not('.template').remove();
    $('html').attr('class','repo');
    var $section = $('<section></section>');
    var $h1Title = $('<h1>My Featured Repos</h1>');
    $('main').append($section);
    $('section').append($h1Title);
    $('section').append(
    reposObj.withTheAttribute('stargazers_count')
    .map(repoCompiler));
  };

  module.repoView = repoView;
})(window);
