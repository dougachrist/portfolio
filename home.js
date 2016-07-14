$(document).ready( function() {
  $('li[data-content=home]').on('click',function() {
    $('section').not('.template').remove();
    loadHome();
  });
});

$(document).ready( function() {
  $('li[data-content=projects]').on('click',function() {
    $('section').not('.template').remove();
    loadProjects();
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
