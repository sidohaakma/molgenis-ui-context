const resp = {
  href: '/api/v2/sys_Language',
  meta: {
    languageCode: 'en',
  },
  items: [
    {
      _href: '/api/v2/sys_Language/de',
      code: 'de',
      name: 'Deutsch',
      active: true
    },
    {
      _href: '/api/v2/sys_Language/en',
      code: 'en',
      name: 'English',
      active: true
    }
  ]
}


export const mockGet = () => {
  return new Promise((resolve) => {
    process.nextTick(() => resolve(resp))
  })
}

export default {get: mockGet}

