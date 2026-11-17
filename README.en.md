<div align="center">

# dsh-project-icon-plugin

**Give every workspace in the DSH sidebar its own icon: emoji, image, or text with a color.**

[![platform](https://img.shields.io/badge/platform-DSH%20WebUI-2b7cd3?style=flat-square)](#install)
![tests](https://img.shields.io/badge/tests-166%20passing-3fb950?style=flat-square)
[![release](https://img.shields.io/github/v/release/lifeopsgo/dsh-project-icon-plugin?style=flat-square)](https://github.com/lifeopsgo/dsh-project-icon-plugin/releases)
[![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)

[![中文](https://img.shields.io/badge/README-中文-red?style=flat-square)](./README.md) [![English](https://img.shields.io/badge/README-English-blue?style=flat-square)](./README.en.md)

<img alt="Demo: giving a workspace its own icon" src="./docs/demo.gif" width="720">

<sub>Recorded on demo data: three sample workspaces covering all three icon modes.</sub>

</div>

A **DeepSeek Harness (DSH)** WebUI plugin. It adds **Change project icon** to the workspace row menu so each workspace can use its own icon instead of the shared folder glyph. Icons live on the host in `$DSH_HOME/project-icons/icons.json`, so they survive a different browser or a cleared cache.

This plugin targets the DSH 0.2 line: `engines.dsh` is `>=0.2.2-rc.3 <0.3.0`. Uploaded images and icons picked from the library are rasterized in the browser to a 64 px WebP before they are stored. An SVG first passes size and structure checks (≤512 KB, no `foreignObject`, no embedded image data, bounded `use`/`image` counts) and is then decoded, so scripts inside a vector file are neither saved nor executed.

## Usage

1. Hover a workspace row in the sidebar and click the `...` button, or right-click the row.
2. Choose **Change project icon**.
3. Pick an icon one of four ways:
   - **Emoji**: click one or type it.
   - **Library**: search public icons on [iconfont.cn](https://www.iconfont.cn/) and pick one. No login needed; the search is proxied through the host, and icon copyright stays with its uploader.
   - **Image**: PNG, JPEG, WebP, or SVG; click to choose or drop a file.
   - **Text**: 1 to 2 characters with a color.
4. **Replace folder icon** is on by default, so the icon replaces the folder glyph. Turn it off to keep the folder glyph and put the icon before the workspace name.
5. Use **Reset** to restore the shipped folder icon.

Rows with an icon keep it on hover, where it gently breathes instead of being swapped for the expand chevron.

## About the icon library

- Search uses iconfont.cn's public but undocumented endpoints. If they change or rate-limit it, the tab reports that iconfont is unreachable and your existing icons stay intact.
- The search keyword leaves this machine and is sent to iconfont.cn by the host; it is not stored locally.
- Results are drawn as image thumbnails first and only go through the structure check and rasterizer once picked, so unusable icons never reach the grid.
- Icon copyright stays with the uploader; check the repository license before commercial use.

## Install

```bash
dsh plugin --profile web add github:lifeopsgo/dsh-project-icon-plugin#v0.1.0
dsh --profile web web
```

Refresh the page after installing. Uninstall:

```bash
dsh plugin --profile web remove @local/dsh-project-icon
```

Development and release steps live in [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT
