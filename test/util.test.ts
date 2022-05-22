import { formatURL } from '../src/lib/utils'

test('URL format BLOB', () => {
  ;['file', 'file.ext', 'path/to/file', 'path/to/file.ext'].forEach((path) =>
    ['https://', 'http://', '']
      .flatMap((protocol) =>
        ['blob', 'raw'].flatMap(
          (part) => `${protocol}github.com/user/repo/${part}/version/${path}`,
        ),
      )
      .forEach((url) => {
        expect(formatURL(url)).toEqual(
          `https://cdn.jsdelivr.net/gh/user/repo@version/${path}`,
        )
      }),
  )
})

test('URL format RAW', () => {
  ;['file', 'file.ext', 'path/to/file', 'path/to/file.ext'].forEach((path) =>
    ['https://', 'http://', '']
      .flatMap(
        (protocol) =>
          `${protocol}raw.githubusercontent.com/user/repo/version/${path}`,
      )
      .forEach((url) => {
        expect(formatURL(url)).toEqual(
          `https://cdn.jsdelivr.net/gh/user/repo@version/${path}`,
        )
      }),
  )
})
