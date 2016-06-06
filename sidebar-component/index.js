define(["../navigation-component/index.js"], function (NavigationComponent) {
  return function (args) {
    var args = args || {};
    var header = args.header || {};
    var navigation = args.navigation || {};
    var onNavigate = args.onNavigate || function () {};

    var sidebarElement = document.createElement("article");
    sidebarElement.classList.add("sidebar");

    var headerElement = document.createElement("header");
    headerElement.classList.add("header");
    sidebarElement.appendChild(headerElement);

    var headingElement = document.createElement("h1");
    headingElement.classList.add("heading");
    headingElement.textContent = header.heading;
    headerElement.appendChild(headingElement);

    sidebarElement.appendChild(NavigationComponent(navigation, onNavigate))

    return sidebarElement;
  }
});
