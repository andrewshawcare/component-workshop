define(["../navigation-component/index.js"], (NavigationComponent) =>
  ({header, navigation, onNavigate}) => {
    let sidebarElement = document.createElement("article");
    sidebarElement.classList.add("sidebar");

    let headerElement = document.createElement("header");
    headerElement.classList.add("header");
    sidebarElement.appendChild(headerElement);

    let headingElement = document.createElement("h1");
    headingElement.classList.add("heading");
    headingElement.textContent = header.heading;
    headerElement.appendChild(headingElement);

    sidebarElement.appendChild(NavigationComponent(navigation, onNavigate))

    return sidebarElement;
  }
);
