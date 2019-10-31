import { shallowMount } from '@vue/test-utils'
import PageComponent from '../../../src/components/PageComponent.vue'
// @ts-ignore
import { get } from '@molgenis/molgenis-api-client'

jest.mock('@molgenis/molgenis-api-client', () => {
  return {
    get: jest.fn()
  }
})

describe('PageComponent', () => {
  let wrapper: any
  let context: any

  beforeEach(() => {
    context = {
      authenticated: true
    }
    get.mockResolvedValue(context)
    wrapper = shallowMount(PageComponent)
  })

  it('should render de page', () => {
    expect(wrapper.html()).toBeDefined()
  })

  it('should emit the "contextLoaded" event', () => {
    expect(wrapper.emitted().contextLoaded[0][0]).toBe(context)
  })
})
