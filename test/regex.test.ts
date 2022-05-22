import { GITHUB_URL_REGEX } from '../src/lib/constants'

test('GITHUB_URL_BLOB', () => {
  ;['https://', 'http://', '']
    .flatMap((protocol) =>
      ['blob', 'raw'].flatMap((part) =>
        ['file', 'file.ext', 'path/to/file', 'path/to/file.ext'].flatMap(
          (path) => `${protocol}github.com/user/repo/${part}/root/${path}`,
        ),
      ),
    )
    .forEach((url) => expect(url).toMatch(GITHUB_URL_REGEX.BLOB))
})

test('GITHUB_URL_RELEASE', () => {
  ;['https://', 'http://', '']
    .flatMap((protocol) =>
      ['releases', 'archive'].flatMap((part) =>
        ['file', 'file.ext', 'path/to/file', 'path/to/file.ext'].flatMap(
          (path) => `${protocol}github.com/user/repo/${part}/root/${path}`,
        ),
      ),
    )
    .forEach((url) => expect(url).toMatch(GITHUB_URL_REGEX.RELEASE))
})

test('GITHUB_REGEX_RAW', () => {
  ;['https://', 'http://', '']
    .flatMap((protocol) =>
      ['usercontent', ''].flatMap((part) =>
        ['file', 'file.ext', 'path/to/file', 'path/to/file.ext'].flatMap(
          (path) => `${protocol}raw.github${part}.com/user/repo/root/${path}`,
        ),
      ),
    )
    .forEach((url) => expect(url).toMatch(GITHUB_URL_REGEX.RAW))
})

test('GITHUB_REGEX_GIST', () => {
  ;['https://', 'http://', '']
    .flatMap((protocol) =>
      ['usercontent', ''].flatMap((part) =>
        ['file', 'file.ext', 'path/to/file', 'path/to/file.ext'].flatMap(
          (path) => `${protocol}gist.github${part}.com/user/repo/root/${path}`,
        ),
      ),
    )
    .forEach((url) => expect(url).toMatch(GITHUB_URL_REGEX.GIST))
})
