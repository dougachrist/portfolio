(function(module) {

  BuildArticle.allAuthors = function() {   // AdminSTUFF
    var authors = BuildArticle.allArticles.map(function(currentArticle) {
      return currentArticle.author;
    })
    .reduce(function(uniqueAuthors, currentAuthor, index, array) {
      if(uniqueAuthors.indexOf(currentAuthor) === -1) {
        uniqueAuthors.push(currentAuthor);
      }
      return uniqueAuthors;
    }, []);
    return authors;
  };

  BuildArticle.numWordsAll = function() {  // Admin STUFF
    return BuildArticle.allArticles.map(function(article) {
      return article.narrativeHTML.match(/\w+/g).length;
    })
    .reduce(function(accumulator, current) {
      return accumulator + current;
    });
  };

  BuildArticle.numWordsByAuthor = function() { // Admin STUFF
    return BuildArticle.allAuthors().map(function(authorName) {
      return {
        name: authorName,
        numWords: BuildArticle.allArticles.filter(function(curArticle) {
          return curArticle.author === authorName;
        })
        .map(function(curArticle) {
          return curArticle.narrativeHTML.match(/\w+/g).length;
        }) // use .map to return the author's word count for each article's body (hint: regexp!).
        .reduce(function(accum, current) {
          return accum + current;
        }, 0) // squash this array of numbers into one big number!
      };
    });
  };

  BuildArticle.hawaiiUsed = function() { // Admin Stuff
    return BuildArticle.allArticles.map(function(article) {
      if(article.narrativeHTML.match(/Hawaii/g)) {
        return article.narrativeHTML.match(/Hawaii/g).length;
      } else {
        return 0;
      }
    })
    .reduce(function(accum, current) {
      return accum + current;
    }, 0);
  };

  $.getJSON('data/blogData.json', function(data) {
    localStorage.blogArticles = JSON.stringify(data);
    BuildArticle.loadAll(data);
    adminView.render();
  });

  module.BuildArticle = BuildArticle;
})(window);
