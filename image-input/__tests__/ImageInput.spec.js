import { mount } from '@vue/test-utils'
import ImageInput from '../ImageInput.vue'

describe('ImageInput', () => {
  it("should handles a file input change", () => {
    let wrapper = mount(ImageInput);
  
    let file_input = wrapper.find("file[type=input]");
    file_input.element.files[0] = { type: "image/jpg" };
    file_input.trigger("change");
  
    expect(wrapper.emitted()["input"]).toBeDefined();
  });
  
  it("should takes the file from the event", () => {
    let wrapper = mount(ImageInput);
  
    const file = { size: 1000, type: "image/png", name: "avatar.png" };
    const event = {
      target: {
        files: [file]
      }
    };
  
    expect(wrapper.vm.takeFile(event)).toEqual(file);
  })
})