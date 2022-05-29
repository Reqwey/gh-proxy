# GitHub Proxy

[English](./README.md) | **中文**

[![Check and Deploy](https://github.com/prprnya/gh-proxy/actions/workflows/wrangler.yml/badge.svg)](https://github.com/prprnya/gh-proxy/actions/workflows/wrangler.yml)

通过 [jsDelivr](https://jsdelivr.com) 代理 GitHub 资源，部署在 [Cloudflare Workers](https://workers.cloudflare.com) 上。

## 使用方法

复制以下文本到浏览器或控制台：

```text
https://api.ruavan.net/gh?url=
```

或

```text
https://gh.ruaa.cc?url=
```

并粘贴到需代理的 URL 前面。

## 支持的 URL

> 以~~不严格~~的**正则表达式**书写

- `(https?://)?github.com/user/repo/(blob|raw|releases|archive)/branch/path/to/file`
- `(https?://)?(raw|gist).github(usercontent)?.com/user/repo/path/to/file`

## 感谢

- [**hunshcn**/gh-proxy](https://github.com/hunshcn/gh-proxy)
- [**EtherDream**/jsproxy](https://github.com/EtherDream/jsproxy)
