(() => {
  // src/client/locales.js
  var DICTIONARIES = {
    zh: {
      "menu.item": "\u4FEE\u6539\u9879\u76EE\u56FE\u6807",
      "dialog.title": "\u4FEE\u6539\u9879\u76EE\u56FE\u6807",
      "tabs.emoji": "\u8868\u60C5",
      "tabs.iconfont": "\u56FE\u6807\u5E93",
      "tabs.image": "\u56FE\u7247",
      "tabs.text": "\u6587\u5B57",
      "emoji.placeholder": "\u6216\u76F4\u63A5\u8F93\u5165\u4E00\u4E2A\u8868\u60C5",
      "upload.pick": "\u9009\u62E9\u56FE\u7247",
      "upload.hint": "PNG\u3001JPEG\u3001WebP\u3001SVG\uFF0C\u81EA\u52A8\u7F29\u5230 64 \u50CF\u7D20\uFF1BSVG \u9700\u81EA\u5305\u542B\uFF0C\u4E0D\u5F15\u7528\u5916\u90E8\u8D44\u6E90",
      "upload.replace": "\u6362\u4E00\u5F20\u56FE\u7247",
      "text.placeholder": "\u8F93\u5165 1 \u5230 2 \u4E2A\u5B57\u7B26",
      "text.color": "\u989C\u8272",
      "preview.label": "\u5728\u4FA7\u8FB9\u680F\u91CC\u7684\u6548\u679C",
      "preview.empty": "\u8FD8\u672A\u9009\u62E9\u56FE\u6807",
      "toggle.replace": "\u8986\u76D6\u539F\u56FE\u6807",
      "actions.reset": "\u6062\u590D\u9ED8\u8BA4",
      "actions.cancel": "\u53D6\u6D88",
      "actions.save": "\u4FDD\u5B58",
      "actions.saving": "\u4FDD\u5B58\u4E2D\u2026",
      "error.requestFailed": "\u4E0E\u540E\u7AEF\u901A\u4FE1\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",
      "error.payloadTooLarge": "\u8FD9\u5F20\u56FE\u7247\u538B\u7F29\u540E\u4ECD\u7136\u592A\u5927\uFF0C\u6362\u4E00\u5F20\u5C0F\u4E00\u70B9\u7684",
      "error.iconLimit": "\u56FE\u6807\u6570\u91CF\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u5148\u5220\u6389\u4E00\u4E9B\u518D\u4FDD\u5B58",
      "error.storeFull": "\u56FE\u6807\u603B\u91CF\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u5148\u5220\u6389\u4E00\u4E9B\u56FE\u7247\u56FE\u6807",
      "error.storeCorrupt": "\u56FE\u6807\u6587\u4EF6\u5DF2\u635F\u574F\uFF0C\u8BF7\u4FEE\u590D\u6216\u5220\u9664\u540E\u91CD\u8BD5",
      "error.unauthorized": "\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5",
      "error.invalidPayload": "\u56FE\u6807\u6570\u636E\u4E0D\u5408\u6CD5\uFF0C\u91CD\u65B0\u9009\u4E00\u6B21",
      "error.invalidQuery": "\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5",
      "error.iconfontUnavailable": "\u8FDE\u4E0D\u4E0A iconfont\uFF0C\u7A0D\u540E\u518D\u8BD5",
      "error.fileTooLarge": "\u56FE\u7247\u539F\u59CB\u6587\u4EF6\u592A\u5927\uFF0C\u6362\u4E00\u5F20\u5C0F\u4E8E 8 MB \u7684",
      "error.tooManyPixels": "\u56FE\u7247\u50CF\u7D20\u592A\u5927\uFF0C\u5148\u88C1\u526A\u4E00\u4E0B",
      "error.encodedTooLarge": "\u538B\u7F29\u540E\u4ECD\u8D85\u8FC7\u5355\u5F20\u56FE\u6807\u4E0A\u9650\uFF0C\u6362\u4E00\u5F20\u66F4\u7B80\u5355\u7684\u56FE",
      "error.unsupportedImage": "\u8FD9\u4E2A\u6587\u4EF6\u8BFB\u4E0D\u51FA\u6765\uFF0C\u6362\u4E00\u5F20 PNG\u3001JPEG\u3001WebP \u6216 SVG",
      "error.emptyImage": "\u8FD9\u5F20\u56FE\u6CA1\u6709\u53EF\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u6362\u4E00\u5F20",
      "error.blankImage": "\u8FD9\u5F20\u56FE\u6E32\u67D3\u51FA\u6765\u662F\u7A7A\u767D\u7684\uFF0C\u6362\u4E00\u5F20",
      "error.extremeAspect": "\u8FD9\u5F20\u56FE\u592A\u6241\u6216\u592A\u7A84\uFF0C\u6362\u6210\u63A5\u8FD1\u6B63\u65B9\u5F62\u7684",
      "error.taintedImage": "SVG \u91CC\u7684 foreignObject \u6216\u5916\u90E8\u5F15\u7528\u65E0\u6CD5\u7ED8\u5236\uFF0C\u5BFC\u51FA\u6210\u7EAF\u77E2\u91CF\u6216\u4F4D\u56FE\u518D\u8BD5",
      "error.svgTooLarge": "SVG \u8D85\u8FC7 512 KB\uFF0C\u6362\u5C0F\u4E00\u70B9\u7684\u6216\u5BFC\u51FA\u6210 PNG",
      "error.svgTooComplex": "SVG \u7ED3\u6784\u592A\u590D\u6742\uFF08\u91CD\u590D\u7684 use / image \u5143\u7D20\u8FC7\u591A\uFF09\uFF0C\u5BFC\u51FA\u6210 PNG \u518D\u8BD5",
      "error.svgNestedData": "SVG \u91CC\u4E0D\u80FD\u518D\u5D4C\u56FE\u7247\u6570\u636E\uFF0C\u5BFC\u51FA\u6210\u5355\u6587\u4EF6\u540E\u518D\u8BD5",
      "error.svgEmbed": "SVG \u91CC\u5E26 foreignObject\uFF0C\u6D4F\u89C8\u5668\u65E0\u6CD5\u5B89\u5168\u7ED8\u5236\uFF0C\u5BFC\u51FA\u6210 PNG \u6216\u7EAF\u77E2\u91CF SVG",
      "error.timeout": "\u8FD9\u5F20\u56FE\u5904\u7406\u8D85\u65F6\uFF0C\u6362\u4E00\u5F20\u66F4\u7B80\u5355\u7684",
      "iconfont.placeholder": "\u641C\u7D22 iconfont \u56FE\u6807\uFF0C\u56DE\u8F66\u5F00\u59CB",
      "iconfont.search": "\u641C\u7D22",
      "iconfont.loading": "\u641C\u7D22\u4E2D\u2026",
      "iconfont.empty": "\u6CA1\u6709\u5339\u914D\u7684\u56FE\u6807\uFF0C\u6362\u4E2A\u5173\u952E\u8BCD",
      "iconfont.hint": "\u4ECE iconfont.cn \u641C\u7D22\u516C\u5F00\u56FE\u6807\uFF0C\u9009\u4E2D\u540E\u6805\u683C\u5316\u6210\u672C\u5730\u56FE\u6807\uFF1B\u56FE\u6807\u7248\u6743\u5F52\u4E0A\u4F20\u8005\uFF0C\u5546\u7528\u524D\u8BF7\u67E5\u6240\u5C5E\u56FE\u6807\u5E93\u7684\u6388\u6743",
      "iconfont.count": "\u547D\u4E2D {total} \u6761\uFF0C\u663E\u793A\u524D {shown} \u6761",
      "iconfont.filtered": "\u547D\u4E2D\u7684\u56FE\u6807\u6CA1\u6709\u53EF\u7528\u7684\u77E2\u91CF\u6587\u4EF6\uFF0C\u6362\u4E2A\u5173\u952E\u8BCD",
      "iconfont.badIcon": "\u8FD9\u4E2A\u56FE\u6807\u753B\u4E0D\u51FA\u6765\uFF0C\u6362\u4E00\u4E2A",
      "iconfont.busy": "\u4E0A\u4E00\u6B21\u641C\u7D22\u8FD8\u6CA1\u7ED3\u675F\uFF0C\u7A0D\u7B49\u4E00\u4E0B"
    },
    en: {
      "menu.item": "Change project icon",
      "dialog.title": "Change project icon",
      "tabs.emoji": "Emoji",
      "tabs.iconfont": "Library",
      "tabs.image": "Image",
      "tabs.text": "Text",
      "emoji.placeholder": "Or type one emoji",
      "upload.pick": "Choose image",
      "upload.hint": "PNG, JPEG, WebP, or SVG; scaled to 64 px. SVGs must be self-contained.",
      "upload.replace": "Choose another image",
      "text.placeholder": "Type 1 to 2 characters",
      "text.color": "Color",
      "preview.label": "How it looks in the sidebar",
      "preview.empty": "No icon selected yet",
      "toggle.replace": "Replace folder icon",
      "actions.reset": "Reset",
      "actions.cancel": "Cancel",
      "actions.save": "Save",
      "actions.saving": "Saving\u2026",
      "error.requestFailed": "Could not reach the host; try again",
      "error.payloadTooLarge": "That image is still too large after scaling",
      "error.iconLimit": "Icon limit reached; delete some icons first",
      "error.storeFull": "Total icon size limit reached; delete some image icons",
      "error.storeCorrupt": "The icon file is corrupt; fix or remove it, then retry",
      "error.unauthorized": "Your session expired; reload the page and retry",
      "error.invalidPayload": "That icon data is invalid; pick it again",
      "error.invalidQuery": "Try a different keyword",
      "error.iconfontUnavailable": "Could not reach iconfont; try again later",
      "error.fileTooLarge": "That file is too large; use one under 8 MB",
      "error.tooManyPixels": "That image has too many pixels; crop it first",
      "error.encodedTooLarge": "Still over the per-icon limit after scaling; use a simpler image",
      "error.unsupportedImage": "That file cannot be read; use PNG, JPEG, WebP, or SVG",
      "error.emptyImage": "That image has no drawable content; choose another",
      "error.blankImage": "That image renders blank; choose another",
      "error.extremeAspect": "That image is too flat or too narrow; use something close to square",
      "error.taintedImage": "Embeds like foreignObject or external references cannot be drawn; export a plain vector or bitmap instead",
      "error.svgTooLarge": "The SVG is over 512 KB; use a smaller file or export a PNG",
      "error.svgTooComplex": "That SVG is too complex (too many repeated use/image elements); export a PNG instead",
      "error.svgNestedData": "The SVG embeds image data; export a single-file SVG and try again",
      "error.svgEmbed": "The SVG contains foreignObject, which browsers cannot rasterize safely; export a PNG or a plain vector",
      "error.timeout": "That image took too long to process; use a simpler one",
      "iconfont.placeholder": "Search iconfont.cn and press Enter",
      "iconfont.search": "Search",
      "iconfont.loading": "Searching\u2026",
      "iconfont.empty": "No matching icons; try another keyword",
      "iconfont.hint": "Search public icons on iconfont.cn; a picked icon is rasterized locally. Copyright stays with the uploader, so check the repository license before commercial use",
      "iconfont.count": "{total} matches, showing the first {shown}",
      "iconfont.filtered": "The matches had no usable vector files; try another keyword",
      "iconfont.badIcon": "That icon cannot be drawn; pick another",
      "iconfont.busy": "The previous search is still running; give it a moment"
    }
  };

  // src/endpoint.js
  var ICONS_PATH = "/project-icon/icons";
  var ICONS_ROUTE = `${ICONS_PATH.slice(1)}`;
  var ICONFONT_PATH = "/project-icon/iconfont";
  var ICONFONT_ROUTE = `${ICONFONT_PATH.slice(1)}`;

  // src/icon-spec.js
  var ICON_DOCUMENT_VERSION = 1;
  var MAX_ICON_ENTRIES = 200;
  var MAX_DOCUMENT_BYTES = 2 * 1024 * 1024;
  var MAX_IMAGE_DATA_URL_LENGTH = 48 * 1024;
  var MAX_EMOJI_CODE_UNITS = 32;
  var MAX_TEXT_CODE_POINTS = 2;
  var TEXT_INPUT_MAX_LENGTH = 4;
  var COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;
  var IMAGE_DATA_URL_PATTERN = /^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/;
  var WORKSPACE_ID_PATTERN = /^[A-Za-z0-9_-]{1,80}$/;
  var CONTROL_CHARACTER_PATTERN = /[\u0000-\u001f\u007f]/;
  var INVISIBLE_ONLY_PATTERN = /^[\s\u00a0\u200b-\u200f\u2060\ufeff]*$/;
  var RESERVED_WORKSPACE_IDS = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
  var PICTOGRAPHIC_PATTERN = new RegExp("\\p{Extended_Pictographic}", "u");
  function normalizeIconSpec(value) {
    if (typeof value !== "object" || value === null) return null;
    const spec = normalizeKind(value);
    if (spec === null) return null;
    return { ...spec, placement: value.placement === "prefix" ? "prefix" : "replace" };
  }
  function normalizeKind(value) {
    if (value.kind === "emoji") return normalizeEmoji(value.value);
    if (value.kind === "text") return normalizeText(value.value, value.color);
    if (value.kind === "image") return normalizeImage(value.value);
    return null;
  }
  function normalizeWorkspaceId(value) {
    if (typeof value !== "string") return null;
    if (!WORKSPACE_ID_PATTERN.test(value)) return null;
    if (RESERVED_WORKSPACE_IDS.has(value)) return null;
    return value;
  }
  function normalizeIconMap(value) {
    const icons = {};
    if (typeof value !== "object" || value === null || Array.isArray(value)) return icons;
    let count = 0;
    for (const rawId of Object.keys(value)) {
      if (count >= MAX_ICON_ENTRIES) break;
      const workspaceId = normalizeWorkspaceId(rawId);
      if (workspaceId === null) continue;
      const spec = normalizeIconSpec(value[rawId]);
      if (spec === null) continue;
      icons[workspaceId] = spec;
      count += 1;
    }
    return icons;
  }
  function normalizeEmoji(raw) {
    if (typeof raw !== "string") return null;
    if (CONTROL_CHARACTER_PATTERN.test(raw)) return null;
    const value = raw.trim();
    if (value.length === 0 || value.length > MAX_EMOJI_CODE_UNITS) return null;
    if (INVISIBLE_ONLY_PATTERN.test(value)) return null;
    if (!value.isWellFormed()) return null;
    if (!PICTOGRAPHIC_PATTERN.test(value)) return null;
    if (countGraphemes(value) !== 1) return null;
    return { kind: "emoji", value };
  }
  function normalizeText(rawValue, rawColor) {
    if (typeof rawValue !== "string") return null;
    if (CONTROL_CHARACTER_PATTERN.test(rawValue)) return null;
    const value = rawValue.trim();
    if (!value.isWellFormed()) return null;
    if (INVISIBLE_ONLY_PATTERN.test(value)) return null;
    const codePoints = Array.from(value).length;
    if (codePoints === 0 || codePoints > MAX_TEXT_CODE_POINTS) return null;
    if (typeof rawColor !== "string" || !COLOR_PATTERN.test(rawColor)) return null;
    return { kind: "text", value, color: rawColor.toLowerCase() };
  }
  function normalizeImage(raw) {
    if (typeof raw !== "string") return null;
    if (raw.length > MAX_IMAGE_DATA_URL_LENGTH) return null;
    if (!IMAGE_DATA_URL_PATTERN.test(raw)) return null;
    return { kind: "image", value: raw };
  }
  function countGraphemes(value) {
    if (typeof Intl === "undefined" || typeof Intl.Segmenter !== "function") return Array.from(value).length;
    const segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    let count = 0;
    for (const _segment of segmenter.segment(value)) count += 1;
    return count;
  }

  // src/client/api.js
  var IconsApiError = class extends Error {
    constructor(code, status) {
      super(code);
      this.name = "IconsApiError";
      this.code = code;
      this.status = status;
    }
  };
  function iconsUrl() {
    return new URL(ICONS_PATH.slice(1), document.baseURI).toString();
  }
  async function fetchIcons(fetcher = fetch) {
    const response = await fetcher(iconsUrl(), {
      headers: { accept: "application/json" },
      credentials: "same-origin",
      cache: "no-store"
    });
    return readDocument(response);
  }
  async function saveIcon(workspaceId, spec, fetcher = fetch) {
    const id = normalizeWorkspaceId(workspaceId);
    if (id === null) throw new IconsApiError("invalid-payload", 400);
    const icon = spec === null ? null : normalizeIconSpec(spec);
    if (spec !== null && icon === null) throw new IconsApiError("invalid-payload", 400);
    const response = await fetcher(iconsUrl(), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ workspaceId: id, icon }),
      credentials: "same-origin",
      cache: "no-store"
    });
    return readDocument(response);
  }
  async function searchIconfont(query, fetcher = fetch) {
    const response = await fetcher(new URL(ICONFONT_PATH.slice(1), document.baseURI).toString(), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ q: query }),
      credentials: "same-origin",
      cache: "no-store"
    });
    if (!response.ok) throw new IconsApiError(await readErrorCode(response), response.status);
    const payload = await response.json();
    const icons = Array.isArray(payload?.icons) ? payload.icons.filter(isSearchIcon) : [];
    const upstreamCount = Number.isInteger(payload?.upstreamCount) ? payload.upstreamCount : icons.length;
    return { icons, upstreamCount };
  }
  function isSearchIcon(value) {
    if (typeof value !== "object" || value === null) return false;
    if (!Number.isInteger(value.id) || value.id <= 0) return false;
    if (typeof value.name !== "string") return false;
    return typeof value.svg === "string" && value.svg.startsWith("<svg") && value.svg.length <= 2e4;
  }
  async function readDocument(response) {
    if (!response.ok) {
      const code = await readErrorCode(response);
      throw new IconsApiError(code, response.status);
    }
    const payload = await response.json();
    if (payload?.version !== ICON_DOCUMENT_VERSION) throw new IconsApiError("invalid-response", response.status);
    return normalizeIconMap(payload.icons);
  }
  async function readErrorCode(response) {
    const payload = await response.json().catch(() => null);
    return typeof payload?.code === "string" ? payload.code : "request-failed";
  }

  // src/client/controller.js
  function createIconController(store, api = { fetchIcons, saveIcon }) {
    let sequence = 0;
    let disposed = false;
    const apply = (step, patch) => {
      if (disposed || step !== sequence) return false;
      store.set(patch);
      return true;
    };
    return {
      load: async () => {
        const step = ++sequence;
        try {
          const icons = await api.fetchIcons();
          apply(step, { phase: "ready", icons, error: null });
        } catch (error) {
          apply(step, { phase: "failed", error: error?.code ?? "request-failed" });
        }
      },
      save: async (workspaceId, spec) => {
        const step = ++sequence;
        store.set({ saving: true, error: null });
        try {
          const icons = await api.saveIcon(workspaceId, spec);
          apply(step, { phase: "ready", icons, editor: null, saving: false, error: null });
        } catch (error) {
          apply(step, { saving: false, error: error?.code ?? "request-failed" });
        }
      },
      closeEditor: () => store.set({ editor: null, error: null }),
      dispose: () => {
        disposed = true;
      }
    };
  }

  // src/client/store.js
  function createIconStore() {
    let state = { phase: "loading", icons: {}, editor: null, saving: false, error: null };
    const listeners = /* @__PURE__ */ new Set();
    return {
      getSnapshot: () => state,
      subscribe: (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
      set: (patch) => {
        state = { ...state, ...patch };
        for (const listener of listeners) listener();
      }
    };
  }

  // src/icon-css.js
  var ESCAPE_BY_CODE = {
    9: "\\9 ",
    10: "\\a ",
    11: "\\b ",
    12: "\\c ",
    13: "\\d "
  };
  function escapeCssString(value) {
    let escaped = "";
    for (const character of String(value)) {
      const code = character.codePointAt(0);
      if (character === "\\") escaped += "\\\\";
      else if (character === '"') escaped += '\\"';
      else if (code <= 31 || code === 127) escaped += ESCAPE_BY_CODE[code] ?? `\\${code.toString(16)} `;
      else escaped += character;
    }
    return escaped;
  }
  var BREATHE_ANIMATION = "animation:dsh-project-icon-breathe 1.6s ease-in-out infinite;transform-origin:center";
  function buildIconAnimationStyles() {
    return [
      "@keyframes dsh-project-icon-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.22)}}",
      '@media (prefers-reduced-motion: reduce){[data-row-key^="workspace:"]:hover>span:first-child::before{animation:none!important}}'
    ].join("\n");
  }
  function workspaceIconSelector(workspaceId) {
    return `[data-row-key="workspace:${escapeCssString(workspaceId)}"]`;
  }
  function buildIconStyles(icons) {
    const normalized = normalizeIconMap(icons);
    const rules = [];
    for (const workspaceId of Object.keys(normalized).sort()) {
      const row = workspaceIconSelector(workspaceId);
      const spec = normalized[workspaceId];
      if (spec.placement === "prefix") {
        const prefix = prefixPaintFor(spec);
        if (prefix === null) continue;
        rules.push(`${row}>span:nth-child(3)>span:first-child::before{${prefix}}`);
        rules.push(`@media (hover:hover){${row}:hover>span:nth-child(3)>span:first-child::before{${BREATHE_ANIMATION}}}`);
        continue;
      }
      const paint = paintFor(spec);
      if (paint === null) continue;
      rules.push(`${row}>span:first-child>svg{display:none}`);
      rules.push(`${row}>span:first-child::before{${paint}}`);
      rules.push(`@media (hover:hover){${row}:hover>span:first-child{display:inline-flex!important}${row}:hover>span:first-child+span{display:none!important}${row}:hover>span:first-child::before{${BREATHE_ANIMATION}}}`);
    }
    return rules.join("\n");
  }
  function prefixPaintFor(spec) {
    if (spec.kind === "image") {
      return `content:"";display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-inline-end:4px;background-image:url("${escapeCssString(spec.value)}");background-size:contain;background-repeat:no-repeat;background-position:center`;
    }
    if (spec.kind === "text") {
      return `content:"${escapeCssString(spec.value)}";color:${spec.color};display:inline-block;vertical-align:middle;margin-inline-end:4px;font-size:11px;font-weight:600;line-height:1`;
    }
    if (spec.kind === "emoji") {
      return `content:"${escapeCssString(spec.value)}";display:inline-block;vertical-align:middle;margin-inline-end:4px;font-size:13px;line-height:1`;
    }
    return null;
  }
  function paintFor(spec) {
    if (spec.kind === "image") {
      return `content:"";width:16px;height:16px;background-image:url("${escapeCssString(spec.value)}");background-size:contain;background-repeat:no-repeat;background-position:center`;
    }
    if (spec.kind === "text") {
      return `content:"${escapeCssString(spec.value)}";color:${spec.color};font-size:11px;font-weight:600;line-height:1;max-width:16px;overflow:hidden`;
    }
    if (spec.kind === "emoji") {
      return `content:"${escapeCssString(spec.value)}";font-size:14px;line-height:1;max-width:16px;overflow:hidden`;
    }
    return null;
  }

  // src/limits.js
  var MAX_QUERY_LENGTH = 32;

  // src/svg-guard.js
  var SVG_MAX_BYTES = 512 * 1024;
  var MAX_ELEMENTS = 5e3;
  var MAX_USE_ELEMENTS = 16;
  var MAX_IMAGE_ELEMENTS = 8;
  var MAX_PATHS = 2e3;
  var MAX_PATH_DATA = 2e5;
  var MAX_FILTERS = 32;
  function inspectSvg(text, byteLength) {
    if (typeof byteLength === "number" && byteLength > SVG_MAX_BYTES) return "svg-too-large";
    if (typeof text !== "string") return "unsupported-type";
    const lower = text.toLowerCase();
    if (!lower.includes("<svg")) return "unsupported-type";
    if (lower.includes("foreignobject")) return "svg-unsupported-embed";
    if (/\bdata:\s*image\/svg/.test(lower) || /\bdata:image\//.test(lower)) return "svg-nested-data";
    if (countOccurrences(lower, "<use") > MAX_USE_ELEMENTS) return "svg-too-complex";
    if (countOccurrences(lower, "<image") > MAX_IMAGE_ELEMENTS) return "svg-too-complex";
    if (countOccurrences(lower, "<") > MAX_ELEMENTS) return "svg-too-complex";
    if (countOccurrences(lower, "<path") > MAX_PATHS) return "svg-too-complex";
    if (countOccurrences(lower, "<filter") > MAX_FILTERS) return "svg-too-complex";
    if (countPathData(lower) > MAX_PATH_DATA) return "svg-too-complex";
    return null;
  }
  function countPathData(text) {
    let total = 0;
    for (const match of text.matchAll(/\sd=("[^"]*"|'[^']*')/g)) {
      total += match[1].length;
      if (total > MAX_PATH_DATA) return total;
    }
    return total;
  }
  function countOccurrences(text, needle) {
    let count = 0;
    let index = text.indexOf(needle);
    while (index !== -1) {
      count += 1;
      if (count > MAX_ELEMENTS) return count;
      index = text.indexOf(needle, index + needle.length);
    }
    return count;
  }

  // src/client/emoji.js
  var EMOJI_CHOICES = [
    "\u{1F680}",
    "\u{1F9ED}",
    "\u{1F4E6}",
    "\u{1F9E9}",
    "\u{1F6E0}\uFE0F",
    "\u2699\uFE0F",
    "\u{1F9EA}",
    "\u{1F9E0}",
    "\u{1F916}",
    "\u{1F6F0}\uFE0F",
    "\u{1FA90}",
    "\u{1F30D}",
    "\u{1F525}",
    "\u26A1",
    "\u{1F4A1}",
    "\u{1F4DA}",
    "\u{1F4DD}",
    "\u{1F5C2}\uFE0F",
    "\u{1F4C1}",
    "\u{1F4CA}",
    "\u{1F4C8}",
    "\u{1F4B0}",
    "\u{1F3E6}",
    "\u{1F6D2}",
    "\u{1F3A8}",
    "\u{1F3AC}",
    "\u{1F3A7}",
    "\u{1F331}",
    "\u{1F340}",
    "\u{1F433}",
    "\u{1F419}",
    "\u{1F980}",
    "\u{1F512}",
    "\u{1F50D}",
    "\u{1F9F1}",
    "\u{1F3E0}"
  ];

  // src/image-fit.js
  var ICON_CANVAS_SIZE = 64;
  function containBox(width, height, size = ICON_CANVAS_SIZE) {
    if (!Number.isFinite(width) || !Number.isFinite(height) || !Number.isFinite(size)) return null;
    if (width <= 0 || height <= 0 || size <= 0) return null;
    const scale = Math.min(size / width, size / height);
    const scaledWidth = Math.round(width * scale);
    const scaledHeight = Math.round(height * scale);
    return {
      width: scaledWidth,
      height: scaledHeight,
      x: Math.round((size - scaledWidth) / 2),
      y: Math.round((size - scaledHeight) / 2)
    };
  }

  // src/image-header.js
  var PNG_SIGNATURE = [137, 80, 78, 71, 13, 10, 26, 10];
  var RIFF_SIGNATURE = [82, 73, 70, 70];
  var WEBP_TAG = [87, 69, 66, 80];
  var SOF_MARKERS = /* @__PURE__ */ new Set([192, 193, 194, 195, 197, 198, 199, 201, 202, 203, 205, 206, 207]);
  function readImageSize(bytes) {
    if (!(bytes instanceof Uint8Array)) return null;
    if (matches(bytes, 0, PNG_SIGNATURE)) return readPngSize(bytes);
    if (matches(bytes, 0, RIFF_SIGNATURE) && matches(bytes, 8, WEBP_TAG)) return readWebpSize(bytes);
    if (bytes[0] === 255 && bytes[1] === 216) return readJpegSize(bytes);
    return null;
  }
  function readPngSize(bytes) {
    if (bytes.length < 24) return null;
    return { width: readUint32(bytes, 16), height: readUint32(bytes, 20) };
  }
  function readWebpSize(bytes) {
    if (bytes.length < 30) return null;
    const chunk = String.fromCharCode(bytes[12], bytes[13], bytes[14], bytes[15]);
    if (chunk !== "VP8X") return null;
    return { width: readUint24LE(bytes, 24) + 1, height: readUint24LE(bytes, 27) + 1 };
  }
  function readJpegSize(bytes) {
    let offset = 2;
    while (offset + 9 < bytes.length) {
      if (bytes[offset] !== 255) {
        offset += 1;
        continue;
      }
      const marker = bytes[offset + 1];
      if (SOF_MARKERS.has(marker)) {
        return { height: readUint16(bytes, offset + 5), width: readUint16(bytes, offset + 7) };
      }
      if (marker === 216 || marker === 217 || marker >= 208 && marker <= 215) {
        offset += 2;
        continue;
      }
      const length = readUint16(bytes, offset + 2);
      if (length < 2) return null;
      offset += 2 + length;
    }
    return null;
  }
  function matches(bytes, offset, signature) {
    if (bytes.length < offset + signature.length) return false;
    return signature.every((value, index) => bytes[offset + index] === value);
  }
  function readUint16(bytes, offset) {
    return bytes[offset] << 8 | bytes[offset + 1];
  }
  function readUint24LE(bytes, offset) {
    return bytes[offset] | bytes[offset + 1] << 8 | bytes[offset + 2] << 16;
  }
  function readUint32(bytes, offset) {
    return (bytes[offset] << 24 | bytes[offset + 1] << 16 | bytes[offset + 2] << 8 | bytes[offset + 3]) >>> 0;
  }

  // src/image-source.js
  var SVG_TYPE = "image/svg+xml";
  var SVG_MEDIA_TYPE_PATTERN = /^image\/svg\+xml$/;
  var SVG_NAME_PATTERN = /\.svg$/i;
  var IMAGE_MEDIA_TYPE_PATTERN = /^image\//;
  function resolveImageSource(type, name = "") {
    if (typeof type !== "string") return null;
    const mediaType = type.split(";")[0].trim().toLowerCase();
    if (SVG_MEDIA_TYPE_PATTERN.test(mediaType)) return "element";
    if (mediaType === "" && typeof name === "string" && SVG_NAME_PATTERN.test(name)) return "element";
    if (IMAGE_MEDIA_TYPE_PATTERN.test(mediaType)) return "bitmap";
    return null;
  }
  function isSvgMediaType(type) {
    return typeof type === "string" && SVG_MEDIA_TYPE_PATTERN.test(type.split(";")[0].trim().toLowerCase());
  }

  // src/client/rasterizer.js
  var WORKER_SOURCE = `
self.onmessage = async (event) => {
  const { bytes, type, size, maxPixels } = event.data
  try {
    const bitmap = await createImageBitmap(new Blob([bytes], { type }))
    if (bitmap.width * bitmap.height > maxPixels) {
      bitmap.close()
      self.postMessage({ ok: false, reason: 'too-many-pixels' })
      return
    }
    const scale = Math.min(size / bitmap.width, size / bitmap.height)
    const width = Math.max(1, Math.round(bitmap.width * scale))
    const height = Math.max(1, Math.round(bitmap.height * scale))
    const canvas = new OffscreenCanvas(size, size)
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, size, size)
    context.drawImage(bitmap, Math.round((size - width) / 2), Math.round((size - height) / 2), width, height)
    bitmap.close()
    const pixels = context.getImageData(0, 0, size, size).data
    let opaque = false
    for (let index = 3; index < pixels.length; index += 4) {
      if (pixels[index] !== 0) {
        opaque = true
        break
      }
    }
    if (!opaque) {
      self.postMessage({ ok: false, reason: 'blank-image' })
      return
    }
    const blob = await canvas.convertToBlob({ type: 'image/webp', quality: 0.9 })
    const dataUrl = new FileReaderSync().readAsDataURL(blob)
    self.postMessage({ ok: true, dataUrl })
  } catch (error) {
    self.postMessage({ ok: false, reason: 'unsupported-type', detail: String(error) })
  }
}
`;
  var DEFAULT_TIMEOUT_MS = 4e3;
  var RasterizeError = class extends Error {
    constructor(reason) {
      super(reason);
      this.name = "RasterizeError";
      this.reason = reason;
    }
  };
  function createRasterizer(options = {}) {
    const WorkerCtor = options.WorkerCtor ?? (typeof Worker === "function" ? Worker : void 0);
    const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    const canvasSize = options.canvasSize ?? 64;
    const maxPixels = options.maxPixels ?? 4096 * 4096;
    return async function rasterize(file) {
      if (WorkerCtor === void 0) throw new RasterizeError("worker-unavailable");
      const url = URL.createObjectURL(new Blob([WORKER_SOURCE], { type: "text/javascript" }));
      let worker;
      try {
        worker = new WorkerCtor(url);
      } catch {
        URL.revokeObjectURL(url);
        throw new RasterizeError("worker-unavailable");
      }
      const bytes = new Uint8Array(await file.arrayBuffer());
      try {
        const payload = await withTimeout(
          new Promise((resolve, reject) => {
            worker.onmessage = (event) => resolve(event.data);
            worker.onerror = () => reject(new RasterizeError("worker-failed"));
            worker.postMessage({ bytes, type: file.type, size: canvasSize, maxPixels });
          }),
          timeoutMs
        );
        if (payload?.ok !== true) throw new RasterizeError(payload?.reason ?? "unsupported-type");
        return payload.dataUrl;
      } finally {
        worker.terminate();
        URL.revokeObjectURL(url);
      }
    };
  }
  function withTimeout(promise, timeoutMs) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new RasterizeError("timeout")), timeoutMs);
      promise.then(
        (value) => {
          clearTimeout(timer);
          resolve(value);
        },
        (error) => {
          clearTimeout(timer);
          reject(error);
        }
      );
    });
  }

  // src/client/image.js
  var WEBP_QUALITY = 0.9;
  var MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
  var MAX_SOURCE_PIXELS = 4096 * 4096;
  var MIN_RENDERED_EDGE = 4;
  var ImageInputError = class extends Error {
    constructor(reason) {
      super(reason);
      this.name = "ImageInputError";
      this.reason = reason;
    }
  };
  function createIconImageReader(overrides = {}) {
    const offThreadRasterize = overrides.rasterize ?? createRasterizer({ canvasSize: ICON_CANVAS_SIZE });
    const decodeBitmap = overrides.decodeBitmap ?? ((file) => createImageBitmap(file, { imageOrientation: "from-image" }));
    const ImageCtor = overrides.ImageCtor;
    const createCanvas = overrides.createCanvas ?? (() => document.createElement("canvas"));
    const createObjectURL = overrides.createObjectURL ?? ((blob) => URL.createObjectURL(blob));
    const revokeObjectURL = overrides.revokeObjectURL ?? ((url) => URL.revokeObjectURL(url));
    async function readHeaderSize(file) {
      if (typeof file.slice !== "function") return null;
      const head = new Uint8Array(await file.slice(0, 64 * 1024).arrayBuffer());
      return readImageSize(head);
    }
    async function openBitmap(file) {
      const header = await readHeaderSize(file);
      if (header !== null && header.width * header.height > MAX_SOURCE_PIXELS) {
        throw new ImageInputError("too-many-pixels");
      }
      const bitmap = await decodeBitmap(file).catch(() => {
        throw new ImageInputError("unsupported-type");
      });
      return {
        vector: false,
        width: bitmap.width,
        height: bitmap.height,
        draw: (context, box) => context.drawImage(bitmap, box.x, box.y, box.width, box.height),
        close: () => bitmap.close()
      };
    }
    async function openImageElement(file) {
      if (file.size > SVG_MAX_BYTES) throw new ImageInputError("svg-too-large");
      const text = await file.text();
      const rejection = inspectSvg(text, file.size);
      if (rejection !== null) throw new ImageInputError(rejection);
      const blob = isSvgMediaType(file.type) ? file : new Blob([file], { type: SVG_TYPE });
      const url = createObjectURL(blob);
      const Ctor = ImageCtor ?? globalThis.Image;
      let image;
      try {
        image = new Ctor();
        image.src = url;
        await image.decode();
      } catch {
        revokeObjectURL(url);
        throw new ImageInputError("unsupported-type");
      }
      return {
        vector: true,
        width: image.naturalWidth,
        height: image.naturalHeight,
        draw: (context, box) => context.drawImage(image, box.x, box.y, box.width, box.height),
        close: () => revokeObjectURL(url)
      };
    }
    return async function readIconImage(file) {
      if (!(file instanceof Blob)) throw new ImageInputError("unsupported-type");
      if (file.size > MAX_UPLOAD_BYTES) throw new ImageInputError("file-too-large");
      const decoder = resolveImageSource(file.type, file.name);
      if (decoder === null) throw new ImageInputError("unsupported-type");
      if (decoder === "bitmap") {
        const header = await readHeaderSize(file);
        if (header !== null && header.width * header.height > MAX_SOURCE_PIXELS) {
          throw new ImageInputError("too-many-pixels");
        }
        try {
          const dataUrl = await offThreadRasterize(file);
          return validateEncoded(dataUrl);
        } catch (error) {
          if (error?.reason !== "worker-unavailable" && error?.reason !== "worker-failed") {
            throw error instanceof ImageInputError ? error : new ImageInputError(error?.reason ?? "unsupported-type");
          }
        }
      }
      const source = decoder === "element" ? await openImageElement(file) : await openBitmap(file);
      try {
        if (source.width <= 0 || source.height <= 0) throw new ImageInputError("empty-image");
        if (!source.vector && source.width * source.height > MAX_SOURCE_PIXELS) throw new ImageInputError("too-many-pixels");
        const box = containBox(source.width, source.height, ICON_CANVAS_SIZE);
        if (box === null || box.width < MIN_RENDERED_EDGE || box.height < MIN_RENDERED_EDGE) {
          throw new ImageInputError("extreme-aspect");
        }
        const canvas = createCanvas();
        canvas.width = ICON_CANVAS_SIZE;
        canvas.height = ICON_CANVAS_SIZE;
        const context = canvas.getContext("2d");
        if (context === null) throw new ImageInputError("canvas-unavailable");
        context.clearRect(0, 0, ICON_CANVAS_SIZE, ICON_CANVAS_SIZE);
        source.draw(context, box);
        if (!hasOpaquePixel(context)) throw new ImageInputError("blank-image");
        return validateEncoded(encode(canvas));
      } finally {
        source.close();
      }
    };
  }
  function validateEncoded(dataUrl) {
    if (typeof dataUrl !== "string" || !/^data:image\/(webp|png);base64,/.test(dataUrl)) {
      throw new ImageInputError("unsupported-type");
    }
    if (dataUrl.length > MAX_IMAGE_DATA_URL_LENGTH) throw new ImageInputError("encoded-too-large");
    return dataUrl;
  }
  function encode(canvas) {
    try {
      const encoded = canvas.toDataURL("image/webp", WEBP_QUALITY);
      return encoded.startsWith("data:image/webp") ? encoded : canvas.toDataURL("image/png");
    } catch (error) {
      if (error?.name === "SecurityError") throw new ImageInputError("tainted-image");
      throw error;
    }
  }
  function hasOpaquePixel(context) {
    let pixels;
    try {
      pixels = context.getImageData(0, 0, ICON_CANVAS_SIZE, ICON_CANVAS_SIZE).data;
    } catch {
      return true;
    }
    for (let index = 3; index < pixels.length; index += 4) {
      if (pixels[index] !== 0) return true;
    }
    return false;
  }
  var readIconImageDataUrl = createIconImageReader();

  // src/client/dialog.js
  var COLOR_PRESETS = ["#1f2328", "#d1242f", "#0969da", "#1a7f37", "#8250df", "#bf3989", "#bc4c00", "#57606a"];
  var ERROR_CODES = {
    "payload-too-large": "error.payloadTooLarge",
    "icon-limit": "error.iconLimit",
    "store-full": "error.storeFull",
    "store-corrupt": "error.storeCorrupt",
    unauthorized: "error.unauthorized",
    "invalid-payload": "error.invalidPayload"
  };
  var IMAGE_ERRORS = {
    "file-too-large": "error.fileTooLarge",
    "too-many-pixels": "error.tooManyPixels",
    "encoded-too-large": "error.encodedTooLarge",
    "canvas-unavailable": "error.unsupportedImage",
    "empty-image": "error.emptyImage",
    "blank-image": "error.blankImage",
    "extreme-aspect": "error.extremeAspect",
    "tainted-image": "error.taintedImage",
    "svg-too-large": "error.svgTooLarge",
    "svg-too-complex": "error.svgTooComplex",
    "svg-nested-data": "error.svgNestedData",
    "svg-unsupported-embed": "error.svgEmbed",
    timeout: "error.timeout",
    "worker-failed": "error.timeout",
    "unsupported-type": "error.unsupportedImage"
  };
  var SEARCH_ERRORS = {
    "invalid-query": "error.invalidQuery",
    "iconfont-unavailable": "error.iconfontUnavailable",
    unauthorized: "error.unauthorized",
    "request-failed": "error.requestFailed",
    "iconfont-busy": "iconfont.busy"
  };
  function draftFromState(mode, state) {
    const placement = state.replaceIcon ? "replace" : "prefix";
    if (mode === "emoji") return normalizeIconSpec({ kind: "emoji", value: state.emoji, placement });
    if (mode === "text") return normalizeIconSpec({ kind: "text", value: state.text, color: state.color, placement });
    if (mode === "iconfont" && state.image === "") return null;
    return normalizeIconSpec({ kind: "image", value: state.image, placement });
  }
  function createIconDialog(React, primitives) {
    const h = React.createElement;
    const { Modal, Button, Switch } = primitives;
    return function IconDialog({ editor, icons, saving, error, onClose, onSave, t }) {
      const existing = icons[editor.workspaceId];
      const [mode, setMode] = React.useState(existing?.kind ?? "emoji");
      const [emoji, setEmoji] = React.useState(existing?.kind === "emoji" ? existing.value : "");
      const [text, setText] = React.useState(existing?.kind === "text" ? existing.value : "");
      const [color, setColor] = React.useState(existing?.kind === "text" ? existing.color : COLOR_PRESETS[0]);
      const [image, setImage] = React.useState(existing?.kind === "image" ? existing.value : "");
      const [query, setQuery] = React.useState("");
      const [search, setSearch] = React.useState({ status: "idle", results: [], upstreamCount: 0, error: null, pendingId: null });
      const [appliedId, setAppliedId] = React.useState(null);
      const [replaceIcon, setReplaceIcon] = React.useState(existing?.placement !== "prefix");
      const [imageError, setImageError] = React.useState(null);
      const fileInput = React.useRef(null);
      const readStep = React.useRef(0);
      const searchStep = React.useRef(0);
      const state = { emoji, text, color, image, replaceIcon };
      const draft = draftFromState(mode, state);
      const message = imageError ?? (error === null ? null : t(ERROR_CODES[error] ?? "error.save"));
      const submit = () => {
        if (draft === null || saving) return;
        onSave(draft);
      };
      const applyFile = async (file) => {
        if (file === void 0) return;
        const step = ++readStep.current;
        setImageError(null);
        setSearch((current) => ({ ...current, error: null }));
        try {
          const dataUrl = await readIconImageDataUrl(file);
          if (step !== readStep.current) return;
          setImage(dataUrl);
          setMode("image");
        } catch (failure) {
          if (step !== readStep.current) return;
          setImageError(t(IMAGE_ERRORS[failure?.reason] ?? "error.unsupportedImage"));
        }
      };
      const updateQuery = (value) => {
        setQuery(value);
        setSearch((current) => ({ ...current, status: "idle", results: [], upstreamCount: 0, error: null, pendingId: null }));
        setAppliedId(null);
      };
      const runSearch = async () => {
        const keyword = query.trim();
        if (keyword === "" || search.status === "loading") return;
        const step = ++searchStep.current;
        setSearch((current) => ({ ...current, status: "loading", error: null, pendingId: null }));
        try {
          const payload = await searchIconfont(keyword);
          if (step !== searchStep.current) return;
          const usable = payload.icons.filter((icon) => inspectSvg(icon.svg, icon.svg.length) === null).map((icon) => ({ ...icon, thumb: svgDataUrl(icon.svg) }));
          setSearch({
            status: "ready",
            results: usable,
            upstreamCount: Math.max(payload.upstreamCount, usable.length),
            error: null,
            pendingId: null
          });
        } catch (failure) {
          if (step !== searchStep.current) return;
          setSearch({
            status: "failed",
            results: [],
            upstreamCount: 0,
            error: t(SEARCH_ERRORS[failure?.code] ?? "error.iconfontUnavailable"),
            pendingId: null
          });
        }
      };
      const chooseResult = async (icon) => {
        const step = ++readStep.current;
        setSearch((current) => ({ ...current, error: null, pendingId: icon.id }));
        try {
          const dataUrl = await readIconImageDataUrl(new File([icon.svg], `${icon.name}.svg`, { type: "image/svg+xml" }));
          if (step !== readStep.current) return;
          setImage(dataUrl);
          setAppliedId(icon.id);
          setSearch((current) => ({ ...current, pendingId: null }));
        } catch {
          if (step !== readStep.current) return;
          setSearch((current) => ({ ...current, pendingId: null, error: t("iconfont.badIcon") }));
        }
      };
      const pickFile = (event) => {
        const file = event.target.files?.[0];
        event.target.value = "";
        void applyFile(file);
      };
      const footer = h(
        "div",
        { className: "dsh-project-icon-footer" },
        h(
          "label",
          { className: "dsh-project-icon-toggle" },
          h(Switch, {
            checked: replaceIcon,
            onChange: setReplaceIcon,
            disabled: saving,
            label: t("toggle.replace")
          }),
          h("span", null, t("toggle.replace"))
        ),
        h("span", { className: "dsh-project-icon-spacer" }),
        existing === void 0 ? null : h(Button, { variant: "ghost", disabled: saving, onClick: () => onSave(null) }, t("actions.reset")),
        h(Button, { variant: "outline", disabled: saving, onClick: onClose }, t("actions.cancel")),
        h(
          Button,
          { variant: "primary", disabled: draft === null || saving, onClick: submit },
          saving ? t("actions.saving") : t("actions.save")
        )
      );
      return h(
        Modal,
        {
          open: true,
          onClose,
          title: t("dialog.title"),
          closeLabel: t("actions.cancel"),
          footer,
          className: "dsh-project-icon-modal",
          contentClassName: "dsh-project-icon-content"
        },
        h(
          "div",
          { className: "dsh-project-icon-body" },
          h(
            "div",
            { className: "dsh-project-icon-tabs", role: "tablist" },
            h("button", {
              type: "button",
              role: "tab",
              className: "dsh-project-icon-tab",
              "aria-selected": mode === "emoji",
              onClick: () => {
                readStep.current += 1;
                setMode("emoji");
              }
            }, t("tabs.emoji")),
            h("button", {
              type: "button",
              role: "tab",
              className: "dsh-project-icon-tab",
              "aria-selected": mode === "iconfont",
              onClick: () => {
                readStep.current += 1;
                setMode("iconfont");
              }
            }, t("tabs.iconfont")),
            h("button", {
              type: "button",
              role: "tab",
              className: "dsh-project-icon-tab",
              "aria-selected": mode === "image",
              onClick: () => {
                readStep.current += 1;
                setMode("image");
              }
            }, t("tabs.image")),
            h("button", {
              type: "button",
              role: "tab",
              className: "dsh-project-icon-tab",
              "aria-selected": mode === "text",
              onClick: () => {
                readStep.current += 1;
                setMode("text");
              }
            }, t("tabs.text"))
          ),
          h(
            "div",
            { className: "dsh-project-icon-pane" },
            mode === "emoji" ? h(EmojiBody, { emoji, setEmoji, setMode, t, h }) : mode === "iconfont" ? h(IconfontBody, { query, updateQuery, search, appliedId, runSearch, chooseResult, t, h }) : mode === "image" ? h(ImageBody, { image, fileInput, pickFile, applyFile, t, h }) : h(TextBody, { text, color, setText, setColor, setMode, t, h })
          ),
          h(
            "div",
            { className: "dsh-project-icon-preview" },
            h("span", { className: "dsh-project-icon-preview-cell" }, draft === null ? null : preview(draft, h)),
            h(
              "span",
              { className: "dsh-project-icon-preview-label" },
              draft === null ? t("preview.empty") : t("preview.label")
            )
          ),
          message === null ? null : h("div", { className: "dsh-project-icon-error", role: "alert" }, message)
        )
      );
    };
    function EmojiBody({ emoji, setEmoji, setMode, t, h: h2 }) {
      return h2(
        "div",
        { className: "dsh-project-icon-emoji-body" },
        h2("div", { className: "dsh-project-icon-grid", role: "group" }, EMOJI_CHOICES.map((choice) => h2("button", {
          key: choice,
          type: "button",
          className: "dsh-project-icon-emoji",
          "aria-label": choice,
          "aria-pressed": emoji === choice,
          onClick: () => {
            setMode("emoji");
            setEmoji(choice);
          }
        }, choice))),
        h2("input", {
          className: "dsh-project-icon-input",
          value: emoji,
          maxLength: 32,
          placeholder: t("emoji.placeholder"),
          "aria-label": t("emoji.placeholder"),
          onChange: (event) => {
            setMode("emoji");
            setEmoji(event.target.value);
          }
        })
      );
    }
    function IconfontBody({ query, updateQuery, search, appliedId, runSearch, chooseResult, t, h: h2 }) {
      const loading = search.status === "loading";
      const body = () => {
        if (search.status === "idle") return h2("div", { className: "dsh-project-icon-hint" }, t("iconfont.hint"));
        if (loading) return h2("div", { className: "dsh-project-icon-hint" }, t("iconfont.loading"));
        if (search.results.length === 0) {
          return h2(
            "div",
            { className: "dsh-project-icon-hint" },
            search.upstreamCount > 0 ? t("iconfont.filtered") : t("iconfont.empty")
          );
        }
        return h2(
          React.Fragment,
          null,
          h2(
            "div",
            { className: "dsh-project-icon-results", role: "group" },
            search.results.map((icon) => h2("button", {
              key: icon.id,
              type: "button",
              className: "dsh-project-icon-result",
              "aria-label": icon.name,
              "aria-pressed": appliedId === icon.id,
              "data-pending": search.pendingId === icon.id ? "true" : void 0,
              title: icon.name,
              onClick: () => void chooseResult(icon)
            }, h2("img", { src: icon.thumb, alt: "", role: "presentation", width: 26, height: 26 })))
          ),
          search.upstreamCount > search.results.length ? h2("div", { className: "dsh-project-icon-hint" }, t("iconfont.count", { shown: search.results.length, total: search.upstreamCount })) : null
        );
      };
      return h2(
        "div",
        { className: "dsh-project-icon-iconfont-body" },
        h2(
          "div",
          { className: "dsh-project-icon-search" },
          h2("input", {
            className: "dsh-project-icon-input",
            value: query,
            maxLength: MAX_QUERY_LENGTH,
            placeholder: t("iconfont.placeholder"),
            "aria-label": t("iconfont.placeholder"),
            onChange: (event) => updateQuery(event.target.value),
            onKeyDown: (event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                void runSearch();
              }
            }
          }),
          h2(
            Button,
            { variant: "outline", disabled: loading || query.trim() === "", onClick: () => void runSearch() },
            loading ? t("iconfont.loading") : t("iconfont.search")
          )
        ),
        search.error === null ? null : h2("div", { className: "dsh-project-icon-error", role: "alert" }, search.error),
        body()
      );
    }
    function ImageBody({ image, fileInput, pickFile, applyFile, t, h: h2 }) {
      return h2(
        "div",
        { className: "dsh-project-icon-image-body" },
        h2(
          "button",
          {
            type: "button",
            className: "dsh-project-icon-dropzone",
            onClick: () => fileInput.current?.click(),
            onDragOver: (event) => event.preventDefault(),
            onDrop: (event) => {
              event.preventDefault();
              void applyFile(event.dataTransfer?.files?.[0]);
            }
          },
          image === "" ? h2("span", { className: "dsh-project-icon-dropzone-text" }, t("upload.pick")) : h2("img", { className: "dsh-project-icon-dropzone-image", src: image, alt: "", role: "presentation" })
        ),
        h2("input", {
          ref: fileInput,
          type: "file",
          accept: "image/png,image/jpeg,image/webp,image/svg+xml,.svg",
          hidden: true,
          onChange: pickFile
        }),
        h2("div", { className: "dsh-project-icon-hint" }, t("upload.hint"))
      );
    }
    function TextBody({ text, color, setText, setColor, setMode, t, h: h2 }) {
      return h2(
        "div",
        { className: "dsh-project-icon-text-body" },
        h2(
          "div",
          { className: "dsh-project-icon-field" },
          h2("input", {
            className: "dsh-project-icon-input",
            value: text,
            maxLength: TEXT_INPUT_MAX_LENGTH,
            placeholder: t("text.placeholder"),
            "aria-label": t("text.placeholder"),
            onChange: (event) => {
              setMode("text");
              setText(event.target.value);
            }
          }),
          h2("input", {
            className: "dsh-project-icon-color",
            type: "color",
            value: color,
            "aria-label": t("text.color"),
            onChange: (event) => {
              setMode("text");
              setColor(event.target.value);
            }
          })
        ),
        h2("div", { className: "dsh-project-icon-sample", style: { color } }, text === "" ? "AB" : text),
        h2("div", { className: "dsh-project-icon-swatches" }, COLOR_PRESETS.map((preset) => h2("button", {
          key: preset,
          type: "button",
          className: "dsh-project-icon-swatch",
          style: { background: preset },
          "aria-label": preset,
          "aria-pressed": color === preset,
          onClick: () => {
            setMode("text");
            setColor(preset);
          }
        })))
      );
    }
  }
  function svgDataUrl(svg) {
    return `data:image/svg+xml;base64,${toBase64(svg)}`;
  }
  function toBase64(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return btoa(binary);
  }
  function preview(spec, h) {
    if (spec.kind === "image") {
      return h("img", { className: "dsh-project-icon-preview-image", src: spec.value, alt: "", role: "presentation" });
    }
    return h("span", {
      className: "dsh-project-icon-preview-glyph",
      style: spec.kind === "text" ? { color: spec.color } : void 0
    }, spec.value);
  }

  // src/client/styles.js
  var STYLES = `
.dsh-project-icon-modal{width:min(520px,calc(100vw - 48px));max-width:none}
.dsh-project-icon-body{display:flex;flex-direction:column;gap:16px;width:100%}
.dsh-project-icon-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;padding:3px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-2)}
.dsh-project-icon-tab{height:30px;border:0;border-radius:7px;background:none;color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;line-height:18px;cursor:pointer;transition:background .15s ease,color .15s ease}
.dsh-project-icon-tab:hover{color:var(--dsw-alias-label-primary)}
.dsh-project-icon-tab[aria-selected="true"]{background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-weight:600;box-shadow:0 1px 3px rgba(0,0,0,.1)}
.dsh-project-icon-emoji-body,.dsh-project-icon-text-body{display:flex;flex-direction:column;gap:10px}
.dsh-project-icon-image-body{display:flex;flex-direction:column;gap:8px}
.dsh-project-icon-iconfont-body{display:flex;flex-direction:column;gap:10px}
.dsh-project-icon-search{display:flex;align-items:center;gap:8px}
.dsh-project-icon-results{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;max-height:132px;overflow:auto;padding:2px}
.dsh-project-icon-result{display:flex;align-items:center;justify-content:center;height:44px;padding:0;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);cursor:pointer;transition:border-color .12s ease,background .12s ease}
.dsh-project-icon-result:hover{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-2)}
.dsh-project-icon-result[aria-pressed="true"]{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-2);box-shadow:0 0 0 2px var(--dsw-alias-brand-primary) inset}
.dsh-project-icon-result[data-pending="true"]{opacity:.45;cursor:progress}
.dsh-project-icon-result img{width:26px;height:26px;object-fit:contain;pointer-events:none}
.dsh-project-icon-pane{display:flex;flex-direction:column;justify-content:flex-start;min-height:156px}
.dsh-project-icon-grid{display:grid;grid-template-columns:repeat(9,1fr);gap:4px;max-height:168px;overflow:auto;padding:2px 4px 2px 2px}
.dsh-project-icon-emoji{display:flex;align-items:center;justify-content:center;height:34px;padding:0;border:1px solid transparent;border-radius:8px;background:none;font-size:18px;line-height:1;cursor:pointer;transition:background .12s ease,border-color .12s ease}
.dsh-project-icon-emoji:hover{background:var(--dsw-alias-interactive-bg-hover,var(--dsw-alias-bg-layer-2))}
.dsh-project-icon-emoji[aria-pressed="true"]{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-2)}
.dsh-project-icon-field{display:flex;align-items:center;gap:8px}
.dsh-project-icon-input{box-sizing:border-box;flex:1;min-width:0;height:34px;padding:0 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:14px;line-height:32px;transition:border-color .15s ease}
.dsh-project-icon-input::placeholder{color:var(--dsw-alias-label-secondary)}
.dsh-project-icon-input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}
.dsh-project-icon-swatches{display:flex;flex-wrap:wrap;gap:8px}
.dsh-project-icon-swatch{width:22px;height:22px;padding:0;border:1px solid var(--dsw-alias-border-l1);border-radius:50%;cursor:pointer;transition:transform .12s ease}
.dsh-project-icon-swatch:hover{transform:scale(1.1)}
.dsh-project-icon-swatch[aria-pressed="true"]{box-shadow:0 0 0 2px var(--dsw-alias-bg-base),0 0 0 4px var(--dsw-alias-brand-primary)}
.dsh-project-icon-color{flex:none;width:34px;height:34px;padding:2px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);cursor:pointer}
.dsh-project-icon-dropzone{display:flex;align-items:center;justify-content:center;width:100%;height:112px;padding:8px;border:1px dashed var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;cursor:pointer;transition:border-color .15s ease,background .15s ease}
.dsh-project-icon-dropzone:hover{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-2)}
.dsh-project-icon-dropzone-image{max-width:72px;max-height:72px;object-fit:contain}
.dsh-project-icon-dropzone-text{pointer-events:none}
.dsh-project-icon-sample{display:flex;align-items:center;justify-content:center;height:76px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1);font-size:34px;font-weight:600;line-height:1}
.dsh-project-icon-hint{color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}
.dsh-project-icon-preview{display:flex;align-items:center;gap:12px;min-height:52px;padding:0 14px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}
.dsh-project-icon-preview-cell{display:inline-flex;flex:none;align-items:center;justify-content:center;width:16px;height:20px}
.dsh-project-icon-preview-glyph{font-size:14px;line-height:1}
.dsh-project-icon-preview-image{width:16px;height:16px;object-fit:contain}
.dsh-project-icon-preview-label{color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}
.dsh-project-icon-error{color:var(--dsw-alias-state-error-primary);font-size:12px;line-height:18px}
.dsh-project-icon-footer{display:flex;align-items:center;gap:8px;flex-wrap:nowrap;width:100%}
.dsh-project-icon-footer button{flex:none;white-space:nowrap}
.dsh-project-icon-toggle{display:inline-flex;align-items:center;gap:8px;margin-inline-end:4px;color:var(--dsw-alias-label-secondary);font-size:13px;line-height:18px;white-space:nowrap;cursor:pointer}
.dsh-project-icon-spacer{flex:1}
`;

  // src/client/overlay.js
  function createOverlay(React, primitives) {
    const h = React.createElement;
    const IconDialog = createIconDialog(React, primitives);
    return function ProjectIconOverlay({ store, locale, namespace }) {
      const state = React.useSyncExternalStore(store.subscribe, store.getSnapshot);
      const controller = React.useMemo(() => createIconController(store), [store]);
      React.useEffect(() => {
        controller.load();
        const onFocus = () => {
          if (!store.getSnapshot().saving) controller.load();
        };
        window.addEventListener("focus", onFocus);
        return () => {
          window.removeEventListener("focus", onFocus);
          controller.dispose();
        };
      }, [controller, store]);
      const css = React.useMemo(
        () => `${buildIconAnimationStyles()}
${STYLES}
${buildIconStyles(state.icons)}`,
        [state.icons]
      );
      return h(
        React.Fragment,
        null,
        h("style", { "data-project-icon-styles": "", dangerouslySetInnerHTML: { __html: css } }),
        state.editor === null ? null : h(IconDialog, {
          key: state.editor.workspaceId,
          editor: state.editor,
          icons: state.icons,
          saving: state.saving,
          error: state.error,
          onClose: controller.closeEditor,
          onSave: (spec) => controller.save(state.editor.workspaceId, spec),
          t: locale.bind(namespace)
        })
      );
    };
  }

  // src/client/index.js
  var NS = "projectIcon";
  var MENU_ACTION_ID = "projectIcon.edit";
  var MENU_ICON_KEY = "projectIcon.edit";
  window.__ModuleLoader__.load({
    id: "@local/dsh-project-icon",
    factory(require2) {
      const React = require2("react");
      const primitives = require2("@deepseek-ai/dsh-client-ui-primitives");
      const h = React.createElement;
      const ProjectIconOverlay = createOverlay(React, primitives);
      function ProjectIconGlyph() {
        return h(
          "svg",
          {
            viewBox: "0 0 16 16",
            width: 16,
            height: 16,
            "aria-hidden": true,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          },
          h("rect", { x: 2.4, y: 3, width: 11.2, height: 10, rx: 2.2 }),
          h("circle", { cx: 6.1, cy: 6.5, r: 1.1, fill: "currentColor", stroke: "none" }),
          h("path", { d: "M3.3 11.6 6.5 8.6l2.1 2 1.5-1.3 2.6 2.5" })
        );
      }
      return {
        inject: ["slots", "locale", "contextMenus"],
        apply(ctx) {
          ctx.effect(() => ctx.locale.register(NS, DICTIONARIES), "project icon: locale");
          const store = createIconStore();
          ctx.slots.inject("contextMenu.icon", () => ctx.slots.register(
            { name: "contextMenu.icon", key: MENU_ICON_KEY },
            ProjectIconGlyph
          ));
          ctx.effect(() => ctx.contextMenus.register({
            id: MENU_ACTION_ID,
            target: "workspace",
            order: 200,
            resolve: ({ workspaceId, displayTitle }) => [{
              id: "edit",
              label: ctx.locale.bind(NS)("menu.item"),
              icon: { key: MENU_ICON_KEY },
              run: () => store.set({ editor: { workspaceId, label: displayTitle }, error: null })
            }]
          }), "project icon: workspace menu action");
          ctx.slots.inject("shell.overlay", () => ctx.slots.register(
            { name: "shell.overlay", id: "project-icon", order: 60, locale: NS },
            () => h(ProjectIconOverlay, { store, locale: ctx.locale, namespace: NS })
          ));
        }
      };
    }
  });
})();
