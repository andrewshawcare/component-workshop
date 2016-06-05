/*global define, document */
define([
  "node_modules/primitive-component/index"
], function (
  PrimitiveComponent
) {
  "use strict";
  return function (data) {
    var data = data || {};
    var object = data.object || {};
    var ValueComponent = data.ValueComponent || PrimitiveComponent;

    var objectElement = document.createElement("dl");
    objectElement.classList.add("object");

    Object.keys(object).forEach(function (key) {
      var termElement = document.createElement("dt");
      termElement.classList.add("key");
      termElement.textContent = key;
      objectElement.appendChild(termElement);

      var descriptionElement = document.createElement("dd");
      descriptionElement.classList.add("value");
      descriptionElement.appendChild(ValueComponent({value: object[key]}));
      objectElement.appendChild(descriptionElement);
    });

    return objectElement;
  };
});
