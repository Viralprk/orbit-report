import { Satellite } from "./satellite";

describe("Satellite", () => {
  it("should create an instance", () => {
    expect(new Satellite("xyz", "ABC", "1/1/2021", "Type", false)).toBeTruthy();
  });
});
