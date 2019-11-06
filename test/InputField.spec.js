import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import InputField from '@/components/InputField.vue'

Vue.config.ignoredElements = ['b-input', 'b-field']


describe('InputField', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(InputField)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('matches input snapshot', () => {
    const config = {
        name: 'recipienctto',
        placeholder: 'To',
        required: true
    };
    const wrapper = shallowMount(InputField, {
        propsData: { config }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('matches textarea snapshot', () => {
    const config = {
        name: 'message',
        required: true,
        type: 'textarea'
    };
    const wrapper = shallowMount(InputField, {
        propsData: { config }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})