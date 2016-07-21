(function(module) {


// $(document).ready( function() {
//   loadHome();
//   $('nav').click(function(event) {
//     if ($(window).width() < 640) {
//       $(this).toggleClass('activeState');
//       console.log(this);
//       $('.starfish').slideToggle(350);
//     }
//   });
// });

  // function loadProjects() {
  //   $('html').attr('class','projects');

  function BuildArticle (blogPost) {
    this.title = blogPost.title;
    this.img = blogPost.img;
    this.narrativeHTML = blogPost.body;
    this.publishedDate = blogPost.publishedDate;
    this.author = blogPost.author;
  }

  BuildArticle.allArticles = [];

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

  function renderArticles() {
    BuildArticle.allArticles.forEach(function(a) {
      $('main').append(a.toHtml('#blog-template'));
    });
  }

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



  BuildArticle.initAdminPage = function() {  // Admin stuff
    var template = Handlebars.compile($('#author-template').html());

    BuildArticle.numWordsByAuthor().forEach(function(stat) {
      $('.author-stats').append(template(stat));
    });
    $('#blog-stats .articles').text(BuildArticle.allArticles.length);
    $('#blog-stats .words').text(BuildArticle.numWordsAll());
    $('#blog-stats .hawaiiUsed').text(BuildArticle.hawaiiUsed());
  };

  $.getJSON('data/blogData.json', function(data) {
    localStorage.blogArticles = JSON.stringify(data);
    BuildArticle.loadAll(data);
    BuildArticle.initAdminPage();
  });


  BuildArticle.fetchAll = function() {

    function checkETag() {
      $.ajax('data/blogData.json').done(function(data, textStatus, jqXHR) {
        console.log(jqXHR.getResponseHeader('ETag'));
        return (jqXHR.getResponseHeader('ETag'));
      });
    }

    if(localStorage.ETagBlog) {

      if(localStorage.ETagBlog === checkETag()) {
        var localBlogs = JSON.parse(localStorage.blogArticles);
        BuildArticle.loadAll(localBlogs);
        renderArticles();
      } else {
        $.getJSON('data/blogData.json', function(data) {
          localStorage.blogArticles = JSON.stringify(data);
          BuildArticle.loadAll(data);
          renderArticles();
        });
      }
    } else {
      localStorage.ETagBlog = checkETag();
      $.getJSON('data/blogData.json', function(data) {
        localStorage.blogArticles = JSON.stringify(data);
        BuildArticle.loadAll(data);
        renderArticles();
      });
    }
  };

  BuildArticle.fetchAll();

    // show more / less button
  $('div.blogText').find('p').nextAll().hide();
  var $button = $('<button>Read More</button>');
  $button.addClass('collapsed');
  $('section').not('.template').append($button);



  function loadHome() {
    var $section = $('<section class="imgHome"></section>'); // MAKE a DIV HERE
    var $div = $('<div></div>');
    var $img = $('<img>');
    $img.attr('src','images/aboutMe.png');
    var $h1Portfolio = $('<h1>PORTFOLIO</h1>');
  // $h1.text('TECH PORTFOLIO');
  // var $body = $('<div class="blogText"></div>');
  // $body.html('<p>On this site I will be displaying some of my technical projects that I have worked on this summer. I will provide a description of each project and a link to each repo on github if you would like to view my souce code. All of these projects have been built by me, or in a team, from scratch.</p>');
    $div.append($img);
    $div.append($h1Portfolio);
    $section.append($div);
    $('html').attr('class','home');
  // $section.append($body);
    $('main').append($section);
  }

  module.BuildArticle = BuildArticle;
})(window);
