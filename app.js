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

var dreamforce = new BuildArticle('DreamForce','images/dreamforce.jpg','<p>In 2014 I was asked to speak on a pannel at Dreamforce regarding AppDynamics recent implementation of Callidus commission systems.</p>');

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
    var h1 = $('<h1>' + articleArray[i].title + '</h1>');
    var img = $('<img>');
    var div = $('<div>' + articleArray[i].narrativeHTML + '</div>');
    div.addClass('blogText');
    img.attr('src',articleArray[i].img);
    section.append(h1);
    section.append(img);
    section.append(div);
    $('main').append(section);
  }
});
