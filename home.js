$(document).ready( function() {
  $('li[data-content=home]').on('click',function() {
    $('section').not('.template').remove();
  });
});

$(document).ready( function() {
  $('li[data-content=projects]').on('click',function() {
    loadProjects();
  });
});
