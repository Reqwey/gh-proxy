# GitHub Proxy

**English** | [中文](./README.zh.md)

[![Check and Deploy](https://github.com/prprnya/gh-proxy/actions/workflows/wrangler.yml/badge.svg)](https://github.com/prprnya/gh-proxy/actions/workflows/wrangler.yml)

Proxy GitHub assets throuth [jsDelivr](https://jsdelivr.com), deploy on [Cloudflare Workers](https://workers.cloudflare.com).

## Usage

Copy the following text to your browser or terminal:

```text
https://api.ruavan.net/gh?url=
```

or

```text
https://gh.ruaa.cc?url=
```

then paste before the URL to proxy.

## Support URLs

> Written as ~~unscrict~~ **RegExp** pattern

- `(https?://)?github.com/user/repo/(blob|raw|releases|archive)/branch/path/to/file`
- `(https?://)?(raw|gist).github(usercontent)?.com/user/repo/path/to/file`

## Credits

- [**hunshcn**/gh-proxy](https://github.com/hunshcn/gh-proxy)
- [**EtherDream**/jsproxy](https://github.com/EtherDream/jsproxy)
