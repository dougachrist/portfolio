$(document).ready( function() {
  $('nav').click(function() {
    $(this).toggleClass('activeState');
    $('.starfish img').slideToggle(350);
  });
});

//
//
// articleArray = [];
//
// function BuildArticle (a,b,c) {
//   this.title = a;
//   this.img = b;
//   this.narrativeHTML = c;
//   articleArray.push(this);
// };
//
// var dreamforce = new BuildArticle('DreamForce','images/dreamforce.jpg','<p>In 2014 I was asked to speak on a pannel at Dreamforce regarding AppDynamics recent implementation of Callidus commission systems.</p>');
// var hawaii = new BuildArticle('Hawaii Life','images/hawaii.jpg','<p>In 2014 my wife an I traveled to Hawaii with my brother to island of Oahu. This was as celebration after I completed my final round of intensive chemo. We spend almost a week going to the beach everyday and playing by the pool. One night we went to a luau and watch hula dancers as we enjoyed a nice meal.</p>');
//
// $(document).ready( function() {
//   for (var i = 0; i < articleArray.length; i++) {
//     var section = $('<section></section>');
//     var h1 = $('<h1>' + articleArray[i].title + '</h1>');
//     var img = $('<img>');
//     var div = $('<div>' + articleArray[i].narrativeHTML + '</div>');
//     div.addClass('blogText');
//     img.attr('src',articleArray[i].img);
//     section.append(h1);
//     section.append(img);
//     section.append(div);
//     $('main').append(section);
//   }
// });

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
}); // have this only do it 3 times
