define(["../link-tree-component/index"], function (LinkTree) {
  return function (rootLink, onNavigate) {
    var navigationElement = document.createElement("nav");

    navigationElement.classList.add("navigation");
    navigationElement.appendChild(LinkTree(rootLink, onNavigate));

    return navigationElement;
  };
});
