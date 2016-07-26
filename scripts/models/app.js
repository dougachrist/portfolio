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

    function checkETag() {
      $.ajax('data/blogData.json').done(function(data, textStatus, jqXHR) {
        console.log(typeof(jqXHR.getResponseHeader('ETag')));
        return (jqXHR.getResponseHeader('ETag'));
      });
    }

    if(localStorage.ETagBlog) {

      if(localStorage.ETagBlog === checkETag()) {
        var localBlogs = JSON.parse(localStorage.blogArticles);
        console.log('option1');
        BuildArticle.loadAll(localBlogs);
        nextFunction();
      } else {
        $.getJSON('data/blogData.json', function(data) {
          localStorage.blogArticles = JSON.stringify(data);
          localStorage.ETagBlog = checkETag();
          console.log('option2');
          BuildArticle.loadAll(data);
          nextFunction();
        });
      }
    } else {
      localStorage.ETagBlog = checkETag();
      $.getJSON('data/blogData.json', function(data) {
        localStorage.blogArticles = JSON.stringify(data);
        console.log('option3');
        BuildArticle.loadAll(data);
        nextFunction();
      });
    }
  };

  module.BuildArticle = BuildArticle;
})(window);
