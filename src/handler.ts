import { GITHUB_URL_REGEX, HOMEPAGE, QUERY_KEY } from './lib/constants'

export async function handleRequest(request: Request): Promise<Response> {
  const requestURL = new URL(request.url)
  const queryURL = requestURL.searchParams.get(QUERY_KEY)
  console.log(requestURL.pathname)

  if (requestURL.pathname !== '/') {
    throw new Error('Not implemented')
  } else if (queryURL === null) {
    return new Response(`${HOMEPAGE}`, { status: 301 })
  } else if (Object.values(GITHUB_URL_REGEX).some((re) => re.test(queryURL))) {
    return new Response(`${queryURL}`)
  } else {
    throw new Error(`${queryURL} is not supported`)
  }
}
