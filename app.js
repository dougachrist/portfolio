$(document).ready( function() {
  $('nav').click(function() {
    $(this).toggleClass('activeState');
  });
});

articleArray = [];

function BuildArticle (a,b,c) {
  this.title = a;
  this.img = b;
  this.narrativeHTML = c;
  articleArray.push(this);
};

var dreamforce = new BuildArticle('DreamForce','images/dreamforce.jpg','In 2014 I was asked to speak on a pannel at Dreamforce regarding AppDynamics recent implementation of Callidus commission systems.');

$(document).ready( function() {
  $('#firstHeader').text(articleArray[0].title);
  $('#firstImg').attr('src', articleArray[0].img);
  $('#firstPost').html(function(){
    return '<p>' + articleArray[0].narrativeHTML + '</p>';
  });
});

$(document).ready( function() {
  for (var i = 0; i < articleArray.length; i++) {
    var section = $('<section></section>');
    var h1 = $('<h1>REALLY COOL title</h1>');
    section.append(h1);
    $('main').append(section);
  }
});
