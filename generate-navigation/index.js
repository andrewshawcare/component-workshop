define([], function () {
  return function generateNavigation(args) {
    var args = args || {};
    var componentId = args.componentId || "";
    var dependencyIds = args.dependencyIds || [];
    var componentLinkTree = args.componentLinkTree || {};

    return new Promise(function (resolve, reject) {
      componentLinkTree = {
        title: componentId,
        url: "?component=" + componentId,
        links: []
      };

      if (dependencyIds.length === 0) {
        resolve(componentLinkTree);
      }

      var dependencyPackagePaths = dependencyIds.map(function (dependencyId) {
        return "json!./node_modules/" + dependencyId + "/package.json";
      });

      require(dependencyPackagePaths, function () {
        var packages = Array.from(arguments);
        Promise.all(packages.map(function (package) {
          return generateNavigation({
            componentId: package.name,
            dependencyIds: package.component.dependencies
          });
        })).then(function (links) {
          Array.prototype.push.apply(componentLinkTree.links, links);
          resolve(componentLinkTree);
        });
      });
    });
  };
});
