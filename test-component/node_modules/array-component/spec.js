/*global define, describe, it, expect */
define(["./index.js"], function (ArrayComponent) {
  describe("An array component", function () {
    it("creates an ordered list from an array", function () {
      var array = ["apple", "carrot", "steak"];
      var arrayComponent = ArrayComponent({array: array});
      expect(arrayComponent.classList).toContain("array");
    });
  });
});
