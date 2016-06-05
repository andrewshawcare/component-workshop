define([], function () {
  return function (args) {
    var args = args || {};
    var name = args.name || "no-name";

    var element = document.createElement("div");
    element.textContent = name;

    return element;
  };
});
