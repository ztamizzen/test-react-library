import * as SjComponents from "./index";

describe("sj-component-ui", () => {
  it("should have exports", () => {
    expect(typeof SjComponents).toEqual("object");
  });

  it("should not have undefined exports", () => {
    Object.keys(SjComponents).forEach((exportKey) => {
      expect(Boolean(SjComponents[exportKey])).toEqual(true);
    });
  });
});
