<div align="center">

# dsh-project-icon-plugin

**给侧边栏的每个工作区一个自己的图标：表情、图片，或文字加颜色。**

[![platform](https://img.shields.io/badge/platform-DSH%20WebUI-2b7cd3?style=flat-square)](#安装)
![tests](https://img.shields.io/badge/tests-93%20passing-3fb950?style=flat-square)
[![release](https://img.shields.io/github/v/release/lifeopsgo/dsh-project-icon-plugin?style=flat-square)](https://github.com/lifeopsgo/dsh-project-icon-plugin/releases)
[![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)

[![中文](https://img.shields.io/badge/README-中文-red?style=flat-square)](./README.md) [![English](https://img.shields.io/badge/README-English-blue?style=flat-square)](./README.en.md)

<img alt="给工作区换图标的演示" src="./docs/demo.gif" width="720">

<sub>演示数据：三个示例工作区，展示三种图标与悬停效果。</sub>

</div>

一个 DeepSeek Harness（DSH）WebUI 插件：工作区行右键菜单里多一项「修改项目图标」，给每个工作区单独设置图标，不再是千篇一律的文件夹。图标存在 Host 侧的 `$DSH_HOME/project-icons/icons.json`，换浏览器、清缓存都还在。

插件面向 DSH 0.2 线，`engines.dsh` 声明为 `>=0.2.2-rc.3 <0.3.0`。

## 用法

1. 鼠标移到侧边栏的工作区行，点右侧 `...`，或直接右键该行。
2. 选「修改项目图标」。
3. 用「表情 / 图片 / 文字」三种方式之一挑图标：图片支持点击选择或直接拖进来，文字可配颜色。
4. 「覆盖原图标」默认打开，图标直接替换文件夹；关掉则保留文件夹图标，把自定义图标加到项目名称前。
5. 想还原，点「恢复默认」。

设了图标的行，鼠标移上去时图标会轻微呼吸放大，不再被展开箭头替换。

## 安装

```bash
dsh plugin --profile web add github:lifeopsgo/dsh-project-icon-plugin#v0.1.0
dsh --profile web web
```

装完刷新页面。卸载：

```bash
dsh plugin --profile web remove @local/dsh-project-icon
```

开发与发布流程见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 许可

MIT
