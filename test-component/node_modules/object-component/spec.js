define(["./index.js"], function (ObjectComponent) {
  describe("An object component", function () {
    it("creates a definition list from an object", function () {
      var object = {"foo": "bar"};
      var objectComponent = ObjectComponent({object: object});
      expect(objectComponent.classList).toContain("object");
    });
  });
});
