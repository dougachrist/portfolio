$(document).ready( function() {
  $('li[data-content=home]').on('click',function() {
    $('section').not('.template').remove();
    loadHome();
  });
});

$(document).ready( function() {
  $(document).on('click', 'li[data-content=projects]', function() {
    $('section').not('.template').remove();
    loadProjects();

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
    loadContacts();
  });
});

$(document).ready( function() {
  $('li[data-content=bio]').on('click',function() {
    $('section').not('.template').remove();
    loadBio();
  });
});
