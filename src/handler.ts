import {
  GITHUB_URL_REGEX,
  HOMEPAGE,
  QUERY_KEY,
  PREFLIGHT_INIT,
} from './lib/constants'
import { formatURL } from './lib/utils'

export default async function handleRequest(
  request: Request,
): Promise<Response> {
  const requestURL = new URL(request.url)
  const queryURL = requestURL.searchParams.get(QUERY_KEY)

  if (queryURL === null) {
    return Response.redirect(`${HOMEPAGE}`, 302)
  } else if (Object.values(GITHUB_URL_REGEX).some((re) => re.test(queryURL))) {
    return httpHandler(request, formatURL(queryURL))
  } else {
    throw new Error(`${queryURL} is not supported`)
  }
}

async function httpHandler(request: Request, url: string): Promise<Response> {
  const method = request.method
  const headers = request.headers
  const body = request.body

  if (method === 'OPTIONS' && headers.has('access-control-request-headers')) {
    return new Response(null, PREFLIGHT_INIT)
  }

  return proxy(url, {
    method,
    headers,
    body,
  })
}

async function proxy(url: string, init: RequestInit): Promise<Response> {
  const response = await fetch(url, init)
  const status = response.status

  return new Response(await response.blob(), {
    status,
  })
}
