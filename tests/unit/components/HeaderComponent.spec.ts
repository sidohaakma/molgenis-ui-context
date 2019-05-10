import { shallowMount } from '@vue/test-utils'
import HeaderComponent from '../../../src/components/HeaderComponent.vue'
import molgenisMenu from '../../../src/exampleMenu'

describe('HeaderComponent.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(HeaderComponent, {
      propsData: { molgenisMenu }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should set the padder height after children have been mounted', (done) => {
    const wrapper = shallowMount(HeaderComponent, {
      propsData: { molgenisMenu }
    })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.mg-sticky-header-padder').html()).toContain('height: 0px;')
      done()
    })
  })
})
