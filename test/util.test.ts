import { formatURL } from '../src/lib/utils'

test('URL format', () => {
  ;['https://', 'http://', '']
    .flatMap((protocol) => `${protocol}github.com/user/repo`)
    .forEach((url) => {
      expect(formatURL(url)).toBe('https://github.com/user/repo')
    })
})
