define([], () =>
  function generateComponentLinkTree({
    componentId,
    dependencyIds = [],
    componentLinkTree = {}
  }) {
    return new Promise((resolve, reject) => {
      componentLinkTree = {
        title: componentId,
        url: "?component=" + componentId,
        links: []
      };

      if (dependencyIds.length === 0) {
        resolve(componentLinkTree);
      }

      let dependencyPackagePaths = dependencyIds.map(dependencyId =>
        "json!./node_modules/" + dependencyId + "/package.json"
      );

      require(dependencyPackagePaths, (...packages) => {
        Promise.all(packages.map(package =>
          generateComponentLinkTree({
            componentId: package.name,
            dependencyIds: package.component.dependencies
          })
        )).then((links) => {
          Array.prototype.push.apply(componentLinkTree.links, links);
          resolve(componentLinkTree);
        });
      });
    });
  }
);
