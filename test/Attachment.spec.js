import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Attachment from '@/components/Attachment.vue'

Vue.config.ignoredElements = ['b-field', 'b-upload', 'b-icon']


describe('Attachment', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Attachment)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('matches snapshot', () => {
    const config = {
        name: 'attachment',
        required: false
    };
    const wrapper = shallowMount(Attachment, {
        propsData: { config }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})