define([], function () {
  return function generateNavigation(args) {
    var args = args || {};
    var componentId = args.componentId || "";
    var dependencyIds = args.dependencyIds || [];
    var navigation = {};

    return new Promise(function (resolve, reject) {
      navigation = {
        title: componentId,
        url: "?component=" + componentId,
        links: []
      };

      if (dependencyIds.length === 0) {
        resolve(navigation);
      }

      var dependencyPackagePaths = dependencyIds.map(function (dependencyId) {
        return "json!./node_modules/" + dependencyId + "/package.json";
      });

      require(dependencyPackagePaths, function () {
        var packages = Array.from(arguments);
        var linkPromises = packages.map(function (package) {
          return generateNavigation({
            componentId: package.name,
            dependencyIds: package.component.dependencies
          });
        });
        Promise.all(linkPromises).then(function (links) {
          Array.prototype.push.apply(navigation.links, links);
          resolve(navigation);
        });
      });
    });
  };
});
