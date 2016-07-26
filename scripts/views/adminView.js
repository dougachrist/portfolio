(function(module) {


  var adminView = {};

  adminView.renderAdminPage = function() {
    $('section').not('.template').remove();
    var $section = $('<section id="blog-stats"></section>');
    var $h1 = $('<h1></h1>');
    $h1.text('Admin Page');
    var $ul = $('<ul class="author-stats"</ul>');
    var $line1 = $('<dt>Total articles:</dt> <dd class="articles"></dd>');
    var $line2 = $('<dt>Total words:</dt> <dd class="words"></dd>');
    var $line3 = $('<dt>Times Hawaii used:</dt> <dd class="hawaiiUsed"></dd>');
    var $line4 = $('<h2>Author Stats</h2>');
    var $line5 = $('<p><em>Details on who is writing, and how much writing they are doing...</em></p>');

    $section.append($h1);
    $section.append($line1);
    $section.append($line2);
    $section.append($line3);
    $section.append($line4);
    $section.append($line5);

    $section.append($ul);
    $('html').attr('class','aboutMe');
    $('main').append($section);

    var template = Handlebars.compile($('#admin-template').html());
    BuildArticle.numWordsByAuthor().forEach(function(stat) {
      $('.author-stats').append(template(stat));
    });
    $('#blog-stats .articles').text(BuildArticle.allArticles.length);
    $('#blog-stats .words').text(BuildArticle.numWordsAll());
    $('#blog-stats .hawaiiUsed').text(BuildArticle.hawaiiUsed());
  };

  module.adminView = adminView;
})(window);
