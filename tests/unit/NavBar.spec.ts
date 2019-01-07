import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'
import molgenisMenu from '@/exampleMenu'
jest.mock('@molgenis/molgenis-api-client')

describe('NavBar.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(NavBar, {
      propsData: { molgenisMenu }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
