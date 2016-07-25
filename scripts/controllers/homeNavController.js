$(document).ready( function() {
  loadMainNav.render();
  loadHome.render();
});

$(document).on('click', 'img', loadWhatWasClicked);
$(document).on('click', 'li', loadWhatWasClicked);

function loadWhatWasClicked () {
  console.log($(this).data().content);
  $('section').not('.template').remove();
  switch($(this).data().content) {
  case 'bio':
    loadAboutMe.render();
    break;
  case 'contact':
    loadContact.render();
    break;
  case 'home':
    loadHome.render();
    break;
  case 'admin':
    BuildArticle.fetchAll(adminView.renderAdminPage);
    break;
  case 'projects':
    BuildArticle.fetchAll(projectsView.renderIndexPage);
    $(document).on('click', '.collapsed', projectsView.renderShowLessButton);
    $(document).on('click', '.expanded', projectsView.renderReadMoreButton);
    break;
  }
}
