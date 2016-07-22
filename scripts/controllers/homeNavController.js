$(document).ready( function() {
  loadMainNav.render();
  loadHome.render();
});

$(document).ready( function() {
  $('li[data-content=home]').on('click',function() {
    $('section').not('.template').remove();
    loadHome.render();
  });
});

$(document).ready( function() {
  $(document).on('click', 'li[data-content=projects]', function() {
    $('section').not('.template').remove();
    console.log('load projects');
    BuildArticle.fetchAll(projectsView.renderIndexPage);

    $(document).on('click', '.collapsed', function() {
      $(this).prev().find('p').nextAll().show();
      $(this).text('Show Less');
      $(this).removeAttr('class');
      $(this).addClass('expanded');
    });

    $(document).on('click', '.expanded', function() {
      $(this).prev().find('p').nextAll().hide();
      $(this).text('Read More');
      $(this).removeAttr('class');
      $(this).addClass('collapsed');
    });
  });
});


$(document).ready( function() {
  $('li[data-content=contact]').on('click',function() {
    $('section').not('.template').remove();
    loadContact.render();
  });
});

$(document).ready( function() {
  $('li[data-content=bio]').on('click',function() {
    $('section').not('.template').remove();
    loadAboutMe.render();
  });
});
