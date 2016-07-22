$(document).ready( function() {
  loadMainNav.render();
  loadHome.render();
});

$(document).on('click', 'li', loadWhatWasClicked);

function loadWhatWasClicked () {
  $('section').not('.template').remove();
  if($(this).data().content === 'bio') {
    loadAboutMe.render();
  }
  if($(this).data().content === 'contact') {
    loadContact.render();
  }
  if($(this).data().content === 'home') {
    loadHome.render();
  }
  if($(this).data().content === 'projects') {
    BuildArticle.fetchAll(projectsView.renderIndexPage);
    $(document).on('click', '.collapsed', projectsView.renderShowLessButton);
    $(document).on('click', '.expanded', projectsView.renderReadMoreButton);
  }
}
