(function(module) {


  var adminView = {
    render : function() {
      var template = Handlebars.compile($('#author-template').html());
      BuildArticle.numWordsByAuthor().forEach(function(stat) {
        $('.author-stats').append(template(stat));
      });
      $('#blog-stats .articles').text(BuildArticle.allArticles.length);
      $('#blog-stats .words').text(BuildArticle.numWordsAll());
      $('#blog-stats .hawaiiUsed').text(BuildArticle.hawaiiUsed());
    }
  };

  adminView.renderAdminPage = function() {
    var template = Handlebars.compile($('#admin-template').html());
    BuildArticle.numWordsByAuthor().forEach(function(stat) {
      $('.author-stats').append(template(stat));
    });

  };

  module.adminView = adminView;
})(window);


// BuildArticle.initAdminPage = function() {  // Admin stuff
//   var template = Handlebars.compile($('#author-template').html());
//
//   BuildArticle.numWordsByAuthor().forEach(function(stat) {
//     $('.author-stats').append(template(stat));
//   });
//   $('#blog-stats .articles').text(BuildArticle.allArticles.length);
//   $('#blog-stats .words').text(BuildArticle.numWordsAll());
//   $('#blog-stats .hawaiiUsed').text(BuildArticle.hawaiiUsed());
// };
