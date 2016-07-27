(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(nextFunction) {
    reposObj.allRepos = [];
    $.ajax({
      url: 'https://api.github.com/users/dougachrist/repos' +
           '?per_page=100' +
           '&sort=update',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + token,
      },
      success: function(data, message, xhr) {
        data.forEach(function(elem) {
          reposObj.allRepos.push(elem);
        });
      }
    }).done(nextFunction);
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
