/*global define */
define([
  "node_modules/array-component/index",
  "node_modules/object-component/index",
  "node_modules/primitive-component/index"
], function (
  ArrayComponent,
  ObjectComponent,
  PrimitiveComponent
) {
  return function RecursiveComponent(data) {
    var data = data || {};
    var value = data.value || "";

    var recursiveElement = document.createElement("div");
    recursiveElement.classList.add("recursive");

    if (value instanceof Array) {
      recursiveElement.appendChild(ArrayComponent({
        array: value,
        ValueComponent: RecursiveComponent
      }));
    } else if (value instanceof Object) {
      recursiveElement.appendChild(ObjectComponent({
        object: value,
        ValueComponent: RecursiveComponent
      }));
    } else {
      recursiveElement.appendChild(PrimitiveComponent({
        value: value
      }));
    }

    return recursiveElement;
  };
});
