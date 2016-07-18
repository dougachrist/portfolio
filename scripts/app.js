$(document).ready( function() {
  loadHome();
  $('nav').click(function(event) {
    if ($(window).width() < 640) {
      $(this).toggleClass('activeState');
      $('.starfish').slideToggle(350);
    }
  });
});

function loadProjects() {

  $(window).scroll(function(){
    $('section').css('opacity', 1 - $(window).scrollTop() / 350);
  });

  var allArticles = [];
  $('html').attr('class','projects');
  function BuildArticle (blogPost) {
    this.title = blogPost.title;
    this.img = blogPost.img;
    this.narrativeHTML = blogPost.body;
    this.publishedDate = blogPost.publishedDate;
    this.author = blogPost.author;
  }

  BuildArticle.prototype.toHtml = function () { //defines ".toHtml" to "Article" just this one time; Reference.
    this.daysAgo = parseInt((new Date() - new Date(this.publishedDate))/60/60/24/1000);
    this.publishStatus = this.publishedDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';


    var source = $('#blog-template').html();
    var template = Handlebars.compile(source);
    return template(this);
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

}

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

function loadBio() {
  var $section = $('<section></section>');
  var $img = $('<img>');
  $img.attr('src','images/aboutMe.jpg');
  var $h1 = $('<h1></h1>');
  $h1.text('About Me');
  var $body = $('<div class="blogText"></div>');
  $body.html('<p>I was born and rasied Santa Barbara, California, and will never lose my So. Cal roots although I now live in Seattle. I moved to the Pacific North West in June of 2016 to start learning how to code at Code Fellows, a bootcamp for learning HMTL CSS and Javascript. Each day we work on a new project that challenges us to discover something new about the coding . I love coding, and will apply the skills I gain this summer when I start business school in the Fall.</p>');
  $section.append($h1);
  $section.append($img);
  $section.append($body);
  $('html').attr('class','aboutMe');
  $('main').append($section);
}

function loadContacts() {
  var $section = $('<section></section>');
  var $form = $('<form><fieldset></fieldset></form>');
  var $textarea = $('<textarea placeholder="write something nice here.." ></textarea>');
  $form.append($textarea);
  var $h1 = $('<h1></h1>');
  $h1.text('Contact Me');
  var $h2 = $('<h2></h2>');
  $h2.text('Fill out the form below to send me a message:');
  $section.append($h1);
  $section.append($h2);
  $section.append($form);
  $('html').attr('class','contact');
  $('main').append($section);
}
