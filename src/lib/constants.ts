export const HOMEPAGE = 'https://github.com/prprnya/gh-proxy'
export const QUERY_KEY = 'url'

export const GITHUB_URL_REGEX: { [key: string]: RegExp } = {
  BLOB: /^(?:https?:\/\/)?github\.com\/.+?\/.+?\/(?:blob|raw)\/.+?\/.+$/i,
  RELEASE: /^(?:https?:\/\/)?github\.com\/.+?\/.+?\/(?:releases|archive)\/.+$/i,
  RAW: /^(?:https?:\/\/)?raw\.(?:github(?:usercontent)?)\.com\/.+?\/.+?\/.+?\/.+$/i,
  GIST: /^(?:https?:\/\/)?gist\.(?:github(?:usercontent)?)\.com\/.+?\/.+?\/.+$/i,
}

export const PREFLIGHT_INIT: ResponseInit = {
  status: 204,
  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods':
      'GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS',
    'access-control-max-age': '1728000',
  },
}
