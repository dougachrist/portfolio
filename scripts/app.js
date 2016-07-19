$(document).ready( function() {
  loadHome();
  $('nav').click(function(event) {
    if ($(window).width() < 640) {
      $(this).toggleClass('activeState');
      console.log(this);
      $('.starfish').slideToggle(350);
    }
  });
});

function loadProjects() {
  $('html').attr('class','projects');

  function BuildArticle (blogPost) {
    this.title = blogPost.title;
    this.img = blogPost.img;
    this.narrativeHTML = blogPost.body;
    this.publishedDate = blogPost.publishedDate;
    this.author = blogPost.author;
  }

  BuildArticle.all = [];

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
      BuildArticle.all.push(new BuildArticle(ele));
    });
  };

  function renderArticles() {
    BuildArticle.all.forEach(function(a) {
      $('main').append(a.toHtml('#blog-template'));
    });
  }

  BuildArticle.fetchAll = function() {

    $.ajax('data/blogData.json').done(function(data, textStatus, jqXHR) {
      console.log(jqXHR.getAllResponseHeaders().contains('e73-15601cea0b0'));
    });


    if(localStorage.blogArticles) {
      console.log('TRUE case runs');
      var localBlogs = JSON.parse(localStorage.blogArticles);
      BuildArticle.loadAll(localBlogs);
      renderArticles();
    } else {
      console.log('else case runs');
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
