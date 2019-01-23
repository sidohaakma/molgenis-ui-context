import { setCookie, getCookie, deleteCookie } from '../../../src/service/CookieService'

describe('CookieService', () => {
  describe('setCookie', () => {
    it('should set a cookie', () => {
      setCookie('test','true', 1)
      expect(document.cookie).toBe('test=true')
    })
  }),
  describe('getCookie', () => {
    it('should get cookie data', () => {
      setCookie('test2','test2', 1)
      expect(getCookie('test')).toBe('true');
      expect(getCookie('test2')).toBe('test2');
    })
  }),
  describe('deleteCookie', () => {
    it('should remove a cookie', () => {
      expect(getCookie('test')).toBe('true');
      deleteCookie('test');
      expect(getCookie('test')).toBe(null);
    })
  })
})
