(function(module) {

  function BuildArticle (blogPost) {
    this.title = blogPost.title;
    this.img = blogPost.img;
    this.narrativeHTML = blogPost.body;
    this.publishedDate = blogPost.publishedDate;
    this.author = blogPost.author;
  }

  BuildArticle.prototype.toHtml = function (scriptTemplateId) {
    var template = Handlebars.compile($(scriptTemplateId).text());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedDate))/60/60/24/1000);
    this.publishStatus = this.publishedDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    return template(this);
  };

  BuildArticle.loadAll = function(dataWePassIn) {
    dataWePassIn.sort(function(a,b) { //check about .sort() on MDN
      return (new Date(b.publishedDate)) - (new Date(a.publishedDate));
    }).forEach(function(ele) {
      BuildArticle.allArticles.push(new BuildArticle(ele));
    });
  };

  BuildArticle.fetchAll = function(nextFunction) {
    BuildArticle.allArticles = [];

    $.ajax({
      url: 'data/blogData.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        var blogDataPull = data;
        if(!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = JSON.stringify(eTag);
          localStorage.blogArticles = JSON.stringify(data);
          BuildArticle.loadAll(data);
          nextFunction();
        } else {
          var localBlogs = JSON.parse(localStorage.blogArticles);
          BuildArticle.loadAll(localBlogs);
          nextFunction();
        }
      }
    });
  };

  module.BuildArticle = BuildArticle;
})(window);
