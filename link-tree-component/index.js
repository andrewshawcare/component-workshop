define([], function () {
  return function LinkTree(link, onNavigate) {
    var linkTreeElement = document.createElement("ul");
    linkTreeElement.classList.add("link", "tree");

    var linkItemElement = document.createElement("li");
    linkItemElement.classList.add("link", "item");

    var anchorElement = document.createElement("a");
    anchorElement.textContent = link.title;
    anchorElement.href = link.url;
    anchorElement.dataset.link = JSON.stringify(link);
    anchorElement.addEventListener("click", function (event) {
      event.stopPropagation();
      event.preventDefault();
      onNavigate(JSON.parse(event.target.dataset.link));
    });
    linkItemElement.appendChild(anchorElement);

    if (link.links) {
      link.links.forEach(function (link) {
        linkItemElement.appendChild(LinkTree(link, onNavigate))
      });
    }

    linkTreeElement.appendChild(linkItemElement);

    return linkTreeElement;
  };
});
