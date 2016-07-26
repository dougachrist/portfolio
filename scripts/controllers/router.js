page('/', home);
page('/bio', aboutMe);
page('/contact', contact);
page('/projects' , projects);
page('/admin', admin);
page();

function home() {
  loadHome.render();
}

function aboutMe() {
  loadAboutMe.render();
}

function contact() {
  loadContact.render();
}

function projects() {
  BuildArticle.fetchAll(projectsView.renderIndexPage);
}

function admin() {
  BuildArticle.fetchAll(adminView.renderAdminPage);
}
