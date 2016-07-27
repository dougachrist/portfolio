(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(nextFunction) {
    reposObj.allRepos = [];
    $.ajax({
      url: 'https://api.github.com/users/codefellows/repos' +
           '?per_page=5' +
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
      return aRepo[myAttr] === 0;
    });
  };

  module.reposObj = reposObj;
})(window);
