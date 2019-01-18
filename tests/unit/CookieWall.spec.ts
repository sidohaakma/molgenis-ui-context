import { shallowMount } from '@vue/test-utils'
import CookieWall from '@/components/CookieWall.vue'

describe('CookieWall', () => {
  const wrapper = shallowMount(CookieWall)

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('sets a cookie', () => {
    expect(document.cookie).toBe('')
    const button = wrapper.find('button')
    button.trigger('click')
    expect(document.cookie).toBe('permissionforcookies=true')
  })
})
