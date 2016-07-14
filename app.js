$(document).ready( function() {
  $('nav').click(function() {
    $(this).toggleClass('activeState');
    $('.starfish img').slideToggle(350);
  });
});

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

function loadProjects () {
  allArticles.forEach(function(a) {
    $('main').append(a.toHtml());
  });
}
