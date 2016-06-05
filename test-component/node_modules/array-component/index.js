/*global define */
define([
  "node_modules/primitive-component/index"
], function (
  PrimitiveComponent
) { "use strict";
  return function (data) {
    var data = data || {};
    var array = data.array || [];
    var ValueComponent = data.ValueComponent || PrimitiveComponent;

    var arrayElement = document.createElement("ol");
    arrayElement.classList.add("array");
    array.forEach(function (value) {
      var itemElement = document.createElement("li");
      itemElement.classList.add("value");
      itemElement.appendChild(ValueComponent({value: value}));
      arrayElement.appendChild(itemElement);
    });

    return arrayElement;
  };
});
