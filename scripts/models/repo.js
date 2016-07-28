(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(nextFunction) {
    reposObj.allRepos = [];
    $.get('/github/users/dougachrist/repos' +
           '?per_page=100' +
           '&sort=update')
      .done(function(data) {
        data.forEach(function(elem) {
          reposObj.allRepos.push(elem);
        });
      }).done(nextFunction);
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
