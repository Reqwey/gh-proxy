export function formatURL(url: URL | string): string {
  try {
    url = new URL(`${url}`)
  } catch (e) {
    url = new URL(`https://${url}`)
  }
  url.protocol = 'https:'
  return url.href
}
