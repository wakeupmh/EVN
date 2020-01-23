import { mount } from "@vue/test-utils";
import Message from "../src/components/Message";

describe("Message.test.js", () => {
  let cmp;
  const createCmp = propsData => mount(Message, { propsData });

  describe("Properties", () => {
    it("should has a message property", () => {
      cmp = createCmp({ message: "hey" });
      expect(cmp.hasProp("message", "hey")).toBeTruthy();
    });

    it("has no cat property", () => {
      cmp = createCmp({ cat: "hey" });
      expect(cmp.hasProp("cat", "hey")).toBeFalsy();
    });
  });
});
