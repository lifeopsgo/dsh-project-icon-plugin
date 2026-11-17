# Contributing

面向本仓库的开发与发布流程。README 只讲怎么用，这里讲怎么改和怎么发。

## 开发

要求 Node.js 22 或 ≥ 24、pnpm 11。

```bash
pnpm install
node --test tests/*.test.mjs   # 166 项单元测试
node scripts/build.mjs         # 重建 client.js
```

`client.js` 是 `src/client/*` 的 esbuild 产物，仓库必须和源码一致。`tests/bundle.test.mjs` 会现场重建并逐字节比对，忘记重建会直接失败。

目录分工：`src/` 放 Host 与两端共享的纯函数，`src/client/` 只给浏览器用，`index.js` 是 Host 入口。业务代码不写注释，靠命名表达意图；测试函数用 `<方法>_<场景>_<预期>` 命名。

端到端脚本在 `.temp/e2e/`（不进版本库，需要 Playwright 与 Chrome）：

```bash
cd .temp/e2e && ./run.sh                     # 起独立实例，跑 36 项交互断言
cd .temp/e2e && E2E_DSH_HOME=/tmp/dsh-demo-home \
  E2E_SEED=seed-demo.mjs E2E_SCRIPT=demo.mjs ./run.sh   # 重录 README 的 docs/demo.gif
```

演示数据由 `seed-demo.mjs` 生成，全部落在 `/tmp/dsh-demo/`，不读取任何真实工作区。

## 发布新版本

版本号写在 `package.json`，标签统一 `v` 前缀，安装地址按标签锁定，所以发布前必须保证产物是最新的。

```bash
# 1. 改 package.json 的 version，重建并验证
node scripts/build.mjs
node --test tests/*.test.mjs

# 2. 提交并打标签
git add -A
git commit -m "chore(release): v0.2.0"
git tag v0.2.0
git push origin main --tags

# 3. 建 release，正文按中文 + 英文两段写
gh release create v0.2.0 --title v0.2.0 --notes-file .release-notes.md

# 4. 用户按新标签安装
dsh plugin --profile web add github:lifeopsgo/dsh-project-icon-plugin#v0.2.0
```

## Pull requests

1. 从 `main` 拉一个只解决一件事的分支。
2. 行为变更必须带测试。
3. 用户可见的文档变更同时更新 `README.md` 与 `README.en.md`。
4. 提交前跑单元测试与构建，确认没有把 `.temp/`、`node_modules/`、密钥或个人路径带进去。

## Security

疑似漏洞不要开公开 issue，直接私下联系仓库维护者。

---

## English

Requirements: Node.js 22 or ≥ 24, pnpm 11.

```bash
pnpm install
node --test tests/*.test.mjs
node scripts/build.mjs
```

`client.js` is the esbuild output of `src/client/*`. `tests/bundle.test.mjs` rebuilds it and compares byte for byte, so a stale artifact fails the suite.

Host code and shared pure functions live in `src/`, browser-only code in `src/client/`, and `index.js` is the host entry.

Releasing: bump `version` in `package.json`, rebuild, test, then commit, tag `vX.Y.Z`, push with `--tags`, and run `gh release create vX.Y.Z --title vX.Y.Z --notes-file notes.md`. Install commands pin that tag. Release notes carry both Chinese and English sections.

Pull requests: one concern per branch, tests for behavior changes, and keep `README.md` and `README.en.md` in sync. Never commit `.temp/`, `node_modules/`, credentials, or personal paths.
