import { GITHUB_URL_REGEX } from '../lib/constants'
export function formatURL(url: URL | string): string {
  try {
    url = new URL(`${url}`)
  } catch (e) {
    url = new URL(`https://${url}`)
  }
  url.protocol = 'https:'
  return generateResourceURL(url)
}

function generateResourceURL(url: URL): string {
  const path = url.pathname

  if (GITHUB_URL_REGEX.BLOB.test(url.href)) {
    url.host = 'cdn.jsdelivr.net'
    url.pathname = path.replace(
      /\/(.+?)\/(.+?)\/(?:blob|raw)\/(.+?)\/(.+)/i,
      'gh/$1/$2@$3/$4',
    )
  } else if (GITHUB_URL_REGEX.RELEASE.test(url.href)) {
    // throw new Error('Not implemented')
  } else if (GITHUB_URL_REGEX.RAW.test(url.href)) {
    url.host = 'cdn.jsdelivr.net'
    url.pathname = path.replace(
      /\/(.+?)\/(.+?)\/(.+?)\/(.+)/i,
      'gh/$1/$2@$3/$4',
    )
  } else if (GITHUB_URL_REGEX.GIST.test(url.href)) {
    // throw new Error('Not implemented')
  } else {
    throw new Error('Invalid URL')
  }

  return url.href
}
