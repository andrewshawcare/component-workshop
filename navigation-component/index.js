define([], () =>
  (rootLink, onNavigate) => {
    let LinkTree = (link, onNavigate) => {
      let linkTreeElement = document.createElement("ul");
      linkTreeElement.classList.add("link", "tree");

      let linkItemElement = document.createElement("li");
      linkItemElement.classList.add("link", "item");

      let anchorElement = document.createElement("a");
      anchorElement.textContent = link.title;
      anchorElement.href = link.url;
      anchorElement.dataset.link = JSON.stringify(link);
      anchorElement.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        onNavigate(JSON.parse(event.target.dataset.link));
      });
      linkItemElement.appendChild(anchorElement);

      if (link.links) {
        link.links.forEach(link => {
          linkItemElement.appendChild(LinkTree(link, onNavigate))
        });
      }

      linkTreeElement.appendChild(linkItemElement);

      return linkTreeElement;
    }

    let navigationElement = document.createElement("nav");
    navigationElement.classList.add("navigation");

    navigationElement.appendChild(LinkTree(rootLink, onNavigate));

    return navigationElement;
  }
);
