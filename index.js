module.exports = function (path) {
  var req = require;
  return function (module_name) {
    try {
      return req(module_name);
    } catch (err) {
      var resolve = null;
      req.main.paths.forEach(function (item) {
        if (resolve) return;
        item = item.replace('node_modules', path);
        try {
          var main = req(item + '/' + module_name + '/package.json').main;
          main = item + '/' + module_name + '/' + main;
          req(main);
          resolve = main;
        } catch (e) {} // do nothing
      });
      if (!resolve) throw err;
      return req(resolve)
    }
  };
};
