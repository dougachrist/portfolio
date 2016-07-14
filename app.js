$(document).ready( function() {
  loadHome();
  $('nav').click(function() {
    $(this).toggleClass('activeState');
    $('.starfish img').slideToggle(350);
  });
});

function loadProjects() {
  var allArticles = [];

  function BuildArticle (blogPost) {
    this.title = blogPost.title;
    this.img = blogPost.img;
    this.narrativeHTML = blogPost.body;
    this.publishedDate = blogPost.publishedDate;
    this.author = blogPost.author;
  }

  BuildArticle.prototype.toHtml = function () { //defines ".toHtml" to "Article" just this one time; Reference.
    var $newArticle = $('section.template').clone(); //"var $whatever" will contain a jQuery object.
    $newArticle.removeClass();
    $newArticle.find('time[pubdate]').attr('title', this.publishedDate);
    $newArticle.find('h2').text(this.author);
    $newArticle.find('time').html('published about ' + parseInt((new Date() - new Date(this.publishedDate))/60/60/24/1000) + ' days ago');
    $newArticle.find('h1').text(this.title);
    $newArticle.find('img').attr('src',this.img);
    $newArticle.find('div.blogText').html(this.narrativeHTML);

    return $newArticle;
  };

  blogArticles.sort(function(a,b) { //check about .sort() on MDN
    return (new Date(b.publishedDate)) - (new Date(a.publishedDate));
  });

  blogArticles.forEach(function(ele) { //"ele" refers to each of the elements in local data; Placeholder.
    allArticles.push(new BuildArticle(ele));
  });

  allArticles.forEach(function(a) {
    $('main').append(a.toHtml());
  });

  $('div.blogText').find('p').nextAll().hide();
  var $button = $('<button>Read More</button>');
  $button.addClass('collapsed');
  $('section').not('.template').append($button);

  // $('div.blogText').find('p').nextAll().hide();
  // var $button = $('<button>Read More</button>');
  // $button.addClass('collapsed');
  // $('section').append($button);
  // $(document).on('click', '.collapsed', function() {
  //   $(this).prev().find('p').nextAll().show();
  //   $(this).text('Read More');
  //   $(this).removeAttr('class');
  //   $(this).addClass('expanded');
  // });
  //
  // $(document).on('click', '.expanded', function() {
  //   $(this).prev().find('p').nextAll().hide();
  //   $(this).text('Show Less');
  //   $(this).removeAttr('class');
  //   $(this).addClass('collapsed');
  // });

}

function loadHome() {
  var $section = $('<section></section>');
  var $img = $('<img>');
  $img.attr('src','images/dreamforce.jpg');
  var $h1 = $('<h1></h1>');
  $h1.text('Welcome to my Professional Portfolio');
  $section.append($h1);
  $section.append($img);
  $('main').append($section);
}

function loadBio() {
  var $section = $('<section></section>');
  var $img = $('<img>');
  $img.attr('src','images/cloud.jpg');
  var $h1 = $('<h1></h1>');
  $h1.text('About Me');
  $section.append($h1);
  $section.append($img);
  $('main').append($section);
}

function loadContacts() {
  var $section = $('<section></section>');
  var $img = $('<img>');
  $img.attr('src','images/starfish.jpg');
  var $h1 = $('<h1></h1>');
  $h1.text('Please Contact Me');
  $section.append($h1);
  $section.append($img);
  $('main').append($section);
}
