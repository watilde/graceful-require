var path = require('path');
module.exports = function (pathname) {
  var req = require;
  return function (module_name) {
    try {
      return req(module_name);
    } catch (err) {
      var resolve = null;
      req.main.paths.some(function (item) {
        if (resolve) return true;
        item = item.replace('node_modules', pathname);
        try {
          var main = path.join(item, module_name, 'package.json');
          main = req(main).main;
          main = path.join(item, module_name, main);
          req(main);
          resolve = main;
        } catch (e) {} // do nothing
      });
      if (!resolve) throw err;
      return req(resolve)
    }
  };
};
