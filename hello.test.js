const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("const hello = () => "Hola, mundo, desde Lima Peru!";
    !");
  });
});
