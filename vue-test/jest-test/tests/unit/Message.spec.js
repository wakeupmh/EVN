import { mount } from "@vue/test-utils";
import Message from "../../src/components/Message";

const createCmp = propsData => mount(Message, { propsData });

describe("Message.test.js", () => {
  let cmp;

  describe("Properties", () => {
    it("should has a message property", () => {
      cmp = createCmp({ message: "hey" });
      expect(cmp.props().message).toBe("hey");
    });

    it("should hasn't cat property", () => {
      cmp = createCmp({ cat: "hey", message: "hey" });
      expect(cmp.props().cat).toBeUndefined();
    });

    it("should Dylan is the default author", () => {
      cmp = createCmp({ message: "hey" });
      expect(cmp.props().author).toBe("Dylan");
    });
    
    describe('Validation', () => {
      const message = createCmp().vm.$options.props.message

      it('message is of type string', () => {
        expect(message.type).toBe(String)
      });

      it('message is required', () => {
        expect(message.required).toBeTruthy()
      });

      it('message has at least length 2', () => {
        expect(message.validator && message.validator('a')).toBeFalsy()
        expect(message.validator && message.validator('aa')).toBeTruthy()
      });
      
    });

    describe('Custom events', () => {
      it('should calls handleClick when click on message', () => {
        /* 
        const spy = spyOn(cmp.vm, 'handleClick');
          using a spy, the original method handleClick will be called. 
          You might intentionally want that, but ideally, 
          we want to avoid it and just check that on clicking

       cmp.vm.handleClick = jest.fn(); // mocking the function
          Here we are totally replacing the handleClick method, 
          accessible on the vm of the wrapper component returned by the mount function.
        */
        const stub = jest.spy();
        cmp.setMethods({handleClick: stub});
        cmp.update(); // forces to re-render, applying the changes into template

        const el = cmp.find('.message').trigger('click');
        expect(cmp.vm.handleClick).toBeCalled();
      });

      it("should triggers a message-clicked event when a handleClick method is called", () => {
        const stub = jest.fn();
        cmp.vm.$on('message-clicked', stub);
        cmp.vm.handleClick();

        expect(stub).toBeCalledWith('Cat');
      });

      it("should calls handleMessageClick when @message-click happens", () => {
        const stub = jest.fn();
        cmp.setMethods({handleClick: stub});
        cmp.update();

        const el = cmp.find(Message).vm.$emmit('message-clicked', 'cat');
        expect(stub).toBeCalledWith('Cat');
      });

    });

  });
});
