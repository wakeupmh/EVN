import App from '@/App'
import { shallowMount } from '@vue/test-utils'

describe('App.test.js',() => {
    let component
    
    beforeEach(() => {
        component = shallowMount(App)
        component.setData({ messages: ['Dog', 'Cat', 'Fish']});
    })

    it('should equals to ["Dog", "Cat", "Fish"]', () => {
        expect(component.vm.messages).toEqual(['Dog', 'Cat', 'Fish'])
    })

    it('has the expected html structure', () => {
        expect(component.element).toMatchSnapshot()
    })
})