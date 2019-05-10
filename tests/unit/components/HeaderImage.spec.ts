import { shallowMount } from '@vue/test-utils'
import HeaderImage from '../../../src/components/HeaderImage.vue'

describe('HeaderImage.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(HeaderImage, {
      propsData: {
        imgSrc: 'https://my/image.png',
        imgMaxHeight: 200

      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
