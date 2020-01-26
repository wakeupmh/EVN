import { shallowMount } from "@vue/test-utils";
import Form from "../../src/components/Form";

describe("Form.test.js", () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(Form);
  });

  describe("Properties", () => {
    it("returns the string in normal order if reversed property is not true", () => {
      cmp.setData({ inputValue: "Yoo" });
      expect(cmp.vm.reversedInput).toBe("Yoo");
    });
  
    it("returns the reversed string if reversed property is true", () => {
      cmp.setData({ inputValue: "Yoo" });
      cmp.setProps({ reversed: true });
      expect(cmp.vm.reversedInput).toBe("ooY");
    });
  });
});