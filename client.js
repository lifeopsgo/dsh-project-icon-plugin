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
      "emoji.placeholder": "\u641C\u7D22\u8868\u60C5\uFF08\u4E2D\u82F1\u6587\u5173\u952E\u8BCD\uFF09\uFF0C\u7C98\u8D34\u4EFB\u610F\u8868\u60C5\u4E5F\u884C",
      "emoji.empty": "\u6CA1\u6709\u5339\u914D\u7684\u8868\u60C5\uFF0C\u76F4\u63A5\u7C98\u8D34\u4E00\u4E2A\u4E5F\u884C",
      "emoji.count": "\u547D\u4E2D {n} \u4E2A",
      "emoji.group.popular": "\u5E38\u7528",
      "emoji.group.smileys": "\u8868\u60C5",
      "emoji.group.nature": "\u81EA\u7136",
      "emoji.group.food": "\u98DF\u7269",
      "emoji.group.activity": "\u6D3B\u52A8",
      "emoji.group.dev": "\u5F00\u53D1",
      "emoji.group.other": "\u5176\u4ED6",
      "emoji.group.matches": "\u641C\u7D22\u7ED3\u679C",
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
      "emoji.placeholder": "Search emoji by keyword, or paste any emoji",
      "emoji.empty": "No matching emoji; you can paste one instead",
      "emoji.count": "{n} matches",
      "emoji.group.popular": "Popular",
      "emoji.group.smileys": "Smileys",
      "emoji.group.nature": "Nature",
      "emoji.group.food": "Food",
      "emoji.group.activity": "Activities",
      "emoji.group.dev": "Dev",
      "emoji.group.other": "Other",
      "emoji.group.matches": "Matches",
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
  var ENTRIES = [
    ["\u{1F680}", "rocket \u706B\u7BAD \u53D1\u5C04 \u4E0A\u7EBF \u90E8\u7F72 release"],
    ["\u{1F9ED}", "compass \u6307\u5357\u9488 \u5BFC\u822A \u65B9\u5411 navigate"],
    ["\u{1F4E6}", "package \u5305 \u4F9D\u8D56 \u6253\u5305 build box \u7BB1\u5B50"],
    ["\u{1F9E9}", "puzzle \u62FC\u56FE \u63D2\u4EF6 plugin \u7EC4\u4EF6 component"],
    ["\u{1F6E0}\uFE0F", "tools \u5DE5\u5177 tool \u7EF4\u4FEE \u6784\u5EFA"],
    ["\u2699\uFE0F", "gear \u9F7F\u8F6E \u8BBE\u7F6E settings \u914D\u7F6E config"],
    ["\u{1F9EA}", "test \u6D4B\u8BD5 \u5B9E\u9A8C lab \u8BD5\u7BA1"],
    ["\u{1F9E0}", "brain \u5927\u8111 \u667A\u80FD ai \u6A21\u578B model"],
    ["\u{1F916}", "robot \u673A\u5668\u4EBA bot \u667A\u80FD\u4F53 agent"],
    ["\u{1F6F0}\uFE0F", "satellite \u536B\u661F \u7F51\u7EDC \u901A\u4FE1 network"],
    ["\u{1FA90}", "planet \u661F\u7403 \u592A\u7A7A space \u5B87\u5B99"],
    ["\u{1F30D}", "earth \u5730\u7403 \u5168\u7403 globe world \u56FD\u9645"],
    ["\u{1F525}", "fire \u706B \u70ED\u95E8 hot \u71C3"],
    ["\u26A1", "bolt \u95EA\u7535 \u6027\u80FD performance \u5FEB fast"],
    ["\u{1F4A1}", "idea \u60F3\u6CD5 \u7075\u611F \u63D0\u793A tip \u706F\u6CE1"],
    ["\u{1F4DA}", "books \u4E66 \u6587\u6863 docs \u5B66\u4E60 study"],
    ["\u{1F4DD}", "memo \u7B14\u8BB0 note \u5199 \u8BB0\u5F55 \u8349\u7A3F draft"],
    ["\u{1F5C2}\uFE0F", "folder \u6587\u4EF6\u5939 \u5F52\u6863 archive \u5206\u7C7B"],
    ["\u{1F4C1}", "folder \u6587\u4EF6\u5939 \u76EE\u5F55 directory"],
    ["\u{1F4CA}", "chart \u56FE\u8868 \u62A5\u8868 report \u7EDF\u8BA1"],
    ["\u{1F4C8}", "growth \u589E\u957F \u4E0A\u5347 \u8D8B\u52BF trend graph"],
    ["\u{1F4B0}", "money \u94B1 \u8D22\u52A1 finance \u8D44\u91D1"],
    ["\u{1F3E6}", "bank \u94F6\u884C \u91D1\u878D \u8D26\u6237 account"],
    ["\u{1F6D2}", "cart \u8D2D\u7269\u8F66 \u7535\u5546 shop \u5546\u57CE"],
    ["\u{1F3A8}", "art \u8BBE\u8BA1 design \u753B\u677F palette \u8C03\u8272"],
    ["\u{1F3AC}", "movie \u7535\u5F71 \u89C6\u9891 video \u526A\u8F91"],
    ["\u{1F3A7}", "audio \u97F3\u9891 \u8033\u673A \u97F3\u4E50 music headphone"],
    ["\u{1F331}", "seedling \u5E7C\u82D7 \u8D77\u6B65 \u65B0\u751F start \u690D\u7269 plant"],
    ["\u{1F340}", "luck \u5E78\u8FD0 \u56DB\u53F6\u8349 clover"],
    ["\u{1F433}", "whale \u9CB8\u9C7C docker \u5BB9\u5668 container"],
    ["\u{1F419}", "octopus \u7AE0\u9C7C github \u516B\u722A\u9C7C"],
    ["\u{1F980}", "crab \u8783\u87F9 rust \u8BED\u8A00 language"],
    ["\u{1F512}", "lock \u9501 \u5B89\u5168 security \u52A0\u5BC6"],
    ["\u{1F50D}", "search \u641C\u7D22 \u67E5\u627E magnifier \u653E\u5927\u955C"],
    ["\u{1F9F1}", "brick \u7816 \u57FA\u7840 \u57FA\u5EFA infra"],
    ["\u{1F3E0}", "home \u5BB6 \u9996\u9875 house"],
    ["\u{1F4F1}", "phone \u624B\u673A \u79FB\u52A8\u7AEF mobile app"],
    ["\u{1F4BB}", "laptop \u7535\u8111 \u5F00\u53D1 dev \u4EE3\u7801 code \u524D\u7AEF"],
    ["\u{1F5A5}\uFE0F", "desktop \u53F0\u5F0F\u673A \u670D\u52A1\u5668 server \u663E\u793A\u5668 \u540E\u7AEF"],
    ["\u2328\uFE0F", "keyboard \u952E\u76D8 \u8F93\u5165 input"],
    ["\u{1F5B1}\uFE0F", "mouse \u9F20\u6807 \u70B9\u51FB click"],
    ["\u{1F50C}", "plug \u63D2\u4EF6 \u63A5\u5165 \u63A5\u53E3 api \u7535\u6E90"],
    ["\u{1F9F5}", "thread \u7EBF\u7A0B \u7EBF process \u8FDB\u7A0B"],
    ["\u{1FA9D}", "hook \u94A9\u5B50 \u56DE\u8C03 callback"],
    ["\u{1F9EC}", "dna \u57FA\u56E0 \u7EE7\u627F inherit"],
    ["\u{1FA7A}", "health \u5065\u5EB7 \u8BCA\u65AD diagnose \u4F53\u68C0"],
    ["\u{1F4E1}", "antenna \u5929\u7EBF \u5E7F\u64AD \u4FE1\u53F7 signal"],
    ["\u{1F310}", "web \u7F51\u9875 \u4E92\u8054\u7F51 internet \u5168\u7403"],
    ["\u2601\uFE0F", "cloud \u4E91 \u4E91\u8BA1\u7B97 \u5907\u4EFD backup"],
    ["\u{1F5C4}\uFE0F", "database \u6570\u636E\u5E93 db \u5B58\u50A8 storage \u673A\u67DC"],
    ["\u{1F4BE}", "disk \u78C1\u76D8 \u4FDD\u5B58 save \u8F6F\u76D8"],
    ["\u{1F4C0}", "disc \u5149\u76D8 \u523B\u5F55 \u955C\u50CF image"],
    ["\u{1F9EE}", "abacus \u8BA1\u7B97 compute \u7B97\u6CD5 algorithm"],
    ["\u{1F4D0}", "ruler \u5C3A\u5B50 \u8BBE\u8BA1 design \u89C4\u8303 spec"],
    ["\u{1F4CF}", "ruler \u6D4B\u91CF \u957F\u5EA6 \u6807\u51C6 standard"],
    ["\u{1F52C}", "microscope \u663E\u5FAE\u955C \u7814\u7A76 research \u5206\u6790"],
    ["\u{1F52D}", "telescope \u671B\u8FDC\u955C \u89C2\u5BDF observe \u76D1\u63A7 monitor"],
    ["\u2697\uFE0F", "alembic \u84B8\u998F \u5B9E\u9A8C experiment \u5316\u5B66"],
    ["\u{1F9F2}", "magnet \u78C1\u94C1 \u5438\u5F15 \u62C9\u53D6 pull"],
    ["\u{1FAAB}", "battery \u7535\u6C60 \u7535\u91CF power \u4F4E"],
    ["\u{1F50B}", "battery \u7535\u6C60 \u7535\u91CF \u5145\u7535 charge"],
    ["\u{1F4B3}", "card \u5361\u7247 \u652F\u4ED8 payment \u5361"],
    ["\u{1F9FE}", "receipt \u6536\u636E \u8D26\u5355 bill \u53D1\u7968"],
    ["\u{1F5C3}\uFE0F", "cardbox \u6587\u4EF6\u76D2 \u8D44\u6599 \u5F52\u6863"],
    ["\u{1F4CB}", "clipboard \u526A\u8D34\u677F \u4EFB\u52A1 task \u6E05\u5355 list \u65E5\u5FD7"],
    ["\u2705", "done \u5B8C\u6210 \u6210\u529F check \u901A\u8FC7 pass"],
    ["\u274C", "error \u9519\u8BEF \u62A5\u9519 fail \u5931\u8D25 cross"],
    ["\u26A0\uFE0F", "warning \u8B66\u544A \u6CE8\u610F caution"],
    ["\u{1F6A7}", "construction \u65BD\u5DE5 \u8FDB\u884C\u4E2D wip \u5EFA\u8BBE\u4E2D"],
    ["\u{1F527}", "wrench \u6273\u624B \u4FEE\u590D fix \u7EF4\u62A4"],
    ["\u{1F528}", "hammer \u9524\u5B50 \u6784\u5EFA build \u6253\u9020"],
    ["\u{1FA9B}", "screwdriver \u87BA\u4E1D\u5200 \u8C03\u8BD5 debug"],
    ["\u{1F9F0}", "toolbox \u5DE5\u5177\u7BB1 \u5DE5\u5177\u5305 kit"],
    ["\u{1F5FA}\uFE0F", "map \u5730\u56FE \u8DEF\u7EBF roadmap \u89C4\u5212"],
    ["\u{1F4CD}", "pin \u6807\u8BB0 \u4F4D\u7F6E location"],
    ["\u{1F6A9}", "flag \u65D7\u5E1C \u91CC\u7A0B\u7891 milestone \u7279\u6027 feature"],
    ["\u{1F3C1}", "finish \u7EC8\u70B9 \u5B8C\u6210 \u6536\u5C3E"],
    ["\u23F1\uFE0F", "timer \u8BA1\u65F6 \u79D2\u8868 \u8017\u65F6 duration"],
    ["\u23F0", "alarm \u95F9\u949F \u63D0\u9192 reminder \u5B9A\u65F6 schedule"],
    ["\u{1F4C5}", "calendar \u65E5\u5386 \u65E5\u671F date \u8BA1\u5212"],
    ["\u{1F5D3}\uFE0F", "calendar \u65E5\u5386 \u6392\u671F \u8BA1\u5212\u65E5\u7A0B"],
    ["\u{1FA84}", "magic \u9B54\u6CD5 \u81EA\u52A8 auto \u4E00\u952E"],
    ["\u2728", "sparkles \u95EA\u8000 \u65B0\u529F\u80FD new \u4F18\u5316"],
    ["\u{1F3AF}", "target \u76EE\u6807 goal \u9776\u5FC3 \u805A\u7126"],
    ["\u{1F3C6}", "trophy \u5956\u676F \u6210\u5C31 achievement \u51A0\u519B"],
    ["\u{1F947}", "medal \u91D1\u724C \u7B2C\u4E00 top \u6700\u4F18"],
    ["\u{1F31F}", "star \u661F \u6536\u85CF favorite \u7CBE\u9009"],
    ["\u2764\uFE0F", "heart \u5FC3 \u559C\u6B22 love \u6536\u85CF"],
    ["\u{1F44D}", "thumbsup \u8D5E \u597D\u7684 ok \u540C\u610F"],
    ["\u{1F440}", "eyes \u770B \u89C2\u5BDF watch \u5BA1\u67E5 review"],
    ["\u{1F9D1}\u200D\u{1F4BB}", "developer \u5F00\u53D1\u8005 \u7A0B\u5E8F\u5458 coder \u5199\u4EE3\u7801"],
    ["\u{1F9D1}\u200D\u{1F527}", "engineer \u5DE5\u7A0B\u5E08 \u7EF4\u4FEE maintain"],
    ["\u{1F9D1}\u200D\u{1F3A8}", "designer \u8BBE\u8BA1\u5E08 \u7F8E\u672F art"],
    ["\u{1F9D1}\u200D\u{1F680}", "astronaut \u5B87\u822A\u5458 \u63A2\u7D22 explore"],
    ["\u{1F579}\uFE0F", "joystick \u624B\u67C4 \u6E38\u620F game \u63A7\u5236 control"],
    ["\u{1F3AE}", "game \u6E38\u620F \u5A31\u4E50 play"],
    ["\u{1F3B2}", "dice \u9AB0\u5B50 \u968F\u673A random"],
    ["\u{1F9F8}", "bear \u73A9\u5076 toy \u73A9\u5177"],
    ["\u{1F422}", "turtle \u4E4C\u9F9F \u6162 slow \u7F13\u5B58 cache"],
    ["\u{1F407}", "rabbit \u5154\u5B50 \u5FEB fast \u654F\u6377 agile"],
    ["\u{1F98A}", "fox \u72D0\u72F8 \u806A\u660E smart"],
    ["\u{1F41D}", "bee \u871C\u8702 \u6784\u5EFA builder \u52E4\u52B3"],
    ["\u{1F989}", "owl \u732B\u5934\u9E70 \u667A\u6167 wisdom"],
    ["\u{1F43C}", "panda \u718A\u732B \u56FD\u5B9D"],
    ["\u{1F984}", "unicorn \u72EC\u89D2\u517D \u7A00\u6709 unique"],
    ["\u{1F3D4}\uFE0F", "mountain \u5C71 \u9AD8\u5CF0 peak \u6311\u6218 challenge"],
    ["\u{1F30A}", "wave \u6CE2\u6D6A \u6D41 stream \u6D77 ocean"],
    ["\u{1F32A}\uFE0F", "tornado \u9F99\u5377\u98CE \u91CD\u6784 refactor \u6DF7\u4E71"],
    ["\u{1F308}", "rainbow \u5F69\u8679 \u591A\u5F69 colorful \u4E3B\u9898 theme"],
    ["\u2615", "coffee \u5496\u5561 \u4F11\u606F break"],
    ["\u{1F375}", "tea \u8336 \u4F11\u606F break"],
    ["\u{1F355}", "pizza \u62AB\u8428 \u96F6\u98DF snack"],
    ["\u{1F382}", "cake \u86CB\u7CD5 \u751F\u65E5 birthday \u5E86\u795D"],
    ["\u{1F389}", "party \u5E86\u795D \u53D1\u5E03 release \u5B8C\u6210 done"],
    ["\u{1F9E8}", "firecracker \u97AD\u70AE \u7206\u53D1 boom"],
    ["\u{1F514}", "bell \u94C3 \u901A\u77E5 notification \u63D0\u9192"],
    ["\u{1F4E2}", "megaphone \u5587\u53ED \u516C\u544A announce"],
    ["\u{1F4E3}", "announce \u5BA3\u5E03 \u5E7F\u64AD broadcast"],
    ["\u{1F517}", "link \u94FE\u63A5 \u5173\u8054 \u5408\u5E76 \u5F15\u7528 reference"],
    ["\u{1F9F7}", "clip \u522B\u9488 \u5939\u5B50 \u56FA\u5B9A"],
    ["\u{1F4CC}", "pin \u56FE\u9489 \u7F6E\u9876 pinned"],
    ["\u{1F9FF}", "amulet \u62A4\u7B26 \u4FDD\u62A4 protect \u9632\u62A4"],
    ["\u{1F6E1}\uFE0F", "shield \u76FE\u724C \u9632\u62A4 security \u5B89\u5168"],
    ["\u{1F510}", "security \u5B89\u5168 \u52A0\u5BC6 \u5BC6\u7801 key \u5BC6\u94A5"],
    ["\u{1F5DD}\uFE0F", "key \u94A5\u5319 \u5BC6\u94A5 access \u8BBF\u95EE"],
    ["\u{1FAAA}", "id \u8EAB\u4EFD \u8BC1\u4EF6 \u7528\u6237 card"],
    ["\u{1F9D1}\u200D\u2696\uFE0F", "judge \u5BA1\u6838 \u88C1\u51B3 \u5408\u89C4 compliance"],
    ["\u{1F4CE}", "clip \u9644\u4EF6 attach \u6587\u4EF6 file"],
    ["\u2702\uFE0F", "scissors \u526A\u5200 \u88C1\u526A crop \u5207\u5206 split"],
    ["\u{1F9F9}", "broom \u626B\u5E1A \u6253\u626B clean"],
    ["\u{1F5D1}\uFE0F", "trash \u5783\u573E \u5220\u9664 delete \u56DE\u6536\u7AD9"],
    ["\u{1F4E4}", "upload \u4E0A\u4F20 \u5BFC\u51FA export \u53D1\u9001 send"],
    ["\u{1F4E5}", "download \u4E0B\u8F7D \u5BFC\u5165 import"],
    ["\u{1F4EE}", "mail \u90AE\u4EF6 \u6295\u9012 post"],
    ["\u{1F4E8}", "mail \u90AE\u4EF6 \u6536\u4EF6 inbox"],
    ["\u{1F4AC}", "chat \u804A\u5929 \u5BF9\u8BDD comment \u8BC4\u8BBA \u6D88\u606F message"],
    ["\u{1F5E8}\uFE0F", "speech \u53D1\u8A00 \u8BC4\u8BBA talk"],
    ["\u{1F550}", "clock \u65F6\u949F \u65F6\u95F4 time"],
    ["\u23F3", "hourglass \u6C99\u6F0F \u7B49\u5F85 waiting \u5904\u7406\u4E2D"],
    ["\u{1F300}", "cyclone \u5FAA\u73AF \u65CB\u8F6C loop \u5237\u65B0 refresh"],
    ["\u{1F504}", "refresh \u5237\u65B0 \u540C\u6B65 sync \u91CD\u8BD5 retry"],
    ["\u267B\uFE0F", "recycle \u56DE\u6536 \u590D\u7528 reuse \u91CD\u6784 refactor"],
    ["\u{1F4D6}", "book \u4E66 \u9605\u8BFB read \u6587\u6863 docs"],
    ["\u{1F4D5}", "book \u4E66 \u624B\u518C manual"],
    ["\u{1F5DE}\uFE0F", "news \u65B0\u95FB \u8D44\u8BAF"],
    ["\u{1F516}", "bookmark \u4E66\u7B7E \u6536\u85CF \u6807\u8BB0"],
    ["\u{1F3F7}\uFE0F", "tag \u6807\u7B7E label \u7248\u672C version"],
    ["\u{1FA9F}", "window \u7A97\u53E3 browser \u6D4F\u89C8\u5668 \u684C\u9762"],
    ["\u{1F9EF}", "extinguisher \u706D\u706B\u5668 \u7D27\u6025 emergency"],
    ["\u{1F691}", "ambulance \u6551\u62A4 \u6545\u969C incident \u4E8B\u6545"],
    ["\u{1F6A8}", "siren \u8B66\u62A5 \u544A\u8B66 alert \u4E25\u91CD critical"],
    ["\u{1F4C9}", "down \u4E0B\u964D \u51CF\u5C11 decrease \u56DE\u9000 rollback"],
    ["\u{1F9CA}", "ice \u51B0 \u51B7\u51BB freeze \u51BB\u7ED3"],
    ["\u{1F36C}", "candy \u7CD6 \u751C sweet \u5C0F\u60CA\u559C"],
    ["\u{1F436}", "\u72D7 \u5C0F\u72D7 dog \u5BA0\u7269", "nature"],
    ["\u{1F431}", "\u732B \u5C0F\u732B cat \u5BA0\u7269", "nature"],
    ["\u{1F42D}", "\u9F20 \u8001\u9F20 mouse \u5BA0\u7269", "nature"],
    ["\u{1F439}", "\u4ED3\u9F20 hamster \u5BA0\u7269", "nature"],
    ["\u{1F430}", "\u5154 \u5154\u5B50 rabbit \u5BA0\u7269", "nature"],
    ["\u{1F43B}", "\u718A bear", "nature"],
    ["\u{1F428}", "\u8003\u62C9 koala", "nature"],
    ["\u{1F42F}", "\u864E \u8001\u864E tiger", "nature"],
    ["\u{1F981}", "\u72EE \u72EE\u5B50 lion", "nature"],
    ["\u{1F42E}", "\u725B cow \u5976\u725B", "nature"],
    ["\u{1F437}", "\u732A pig", "nature"],
    ["\u{1F438}", "\u86D9 \u9752\u86D9 frog", "nature"],
    ["\u{1F435}", "\u7334 \u7334\u5B50 monkey", "nature"],
    ["\u{1F414}", "\u9E21 chicken", "nature"],
    ["\u{1F427}", "\u4F01\u9E45 penguin", "nature"],
    ["\u{1F426}", "\u9E1F bird", "nature"],
    ["\u{1F986}", "\u9E2D duck", "nature"],
    ["\u{1F985}", "\u9E70 eagle", "nature"],
    ["\u{1F987}", "\u8759\u8760 bat", "nature"],
    ["\u{1F43A}", "\u72FC wolf", "nature"],
    ["\u{1F434}", "\u9A6C horse", "nature"],
    ["\u{1F98B}", "\u8774\u8776 butterfly", "nature"],
    ["\u{1F40C}", "\u8717\u725B snail \u6162", "nature"],
    ["\u{1F41E}", "\u74E2\u866B bug \u866B\u5B50", "nature"],
    ["\u{1F41C}", "\u8682\u8681 ant", "nature"],
    ["\u{1F577}\uFE0F", "\u8718\u86DB spider", "nature"],
    ["\u{1F982}", "\u874E\u5B50 scorpion", "nature"],
    ["\u{1F41F}", "\u9C7C fish", "nature"],
    ["\u{1F42C}", "\u6D77\u8C5A dolphin", "nature"],
    ["\u{1F988}", "\u9CA8\u9C7C shark", "nature"],
    ["\u{1F335}", "\u4ED9\u4EBA\u638C cactus \u690D\u7269", "nature"],
    ["\u{1F332}", "\u6811 \u677E\u6811 tree \u68EE\u6797", "nature"],
    ["\u{1F333}", "\u6811 tree \u7EFF\u5316", "nature"],
    ["\u{1F334}", "\u68D5\u6988\u6811 palm \u6D77\u6EE9", "nature"],
    ["\u{1F33B}", "\u5411\u65E5\u8475 sunflower \u82B1", "nature"],
    ["\u{1F339}", "\u73AB\u7470 rose \u82B1", "nature"],
    ["\u{1F338}", "\u6A31\u82B1 blossom \u82B1", "nature"],
    ["\u{1F341}", "\u67AB\u53F6 maple \u79CB\u5929", "nature"],
    ["\u2744\uFE0F", "\u96EA\u82B1 snowflake \u51AC\u5929 \u51B7", "nature"],
    ["\u26C4", "\u96EA\u4EBA snowman \u51AC\u5929", "nature"],
    ["\u{1F31E}", "\u592A\u9633 sun \u6674\u5929", "nature"],
    ["\u{1F34E}", "\u82F9\u679C apple \u6C34\u679C", "food"],
    ["\u{1F350}", "\u68A8 pear \u6C34\u679C", "food"],
    ["\u{1F34A}", "\u6A58\u5B50 orange \u6C34\u679C", "food"],
    ["\u{1F34B}", "\u67E0\u6AAC lemon \u6C34\u679C", "food"],
    ["\u{1F34C}", "\u9999\u8549 banana \u6C34\u679C", "food"],
    ["\u{1F349}", "\u897F\u74DC watermelon \u6C34\u679C", "food"],
    ["\u{1F347}", "\u8461\u8404 grapes \u6C34\u679C", "food"],
    ["\u{1F353}", "\u8349\u8393 strawberry \u6C34\u679C", "food"],
    ["\u{1F352}", "\u6A31\u6843 cherry \u6C34\u679C", "food"],
    ["\u{1F351}", "\u6843\u5B50 peach \u6C34\u679C", "food"],
    ["\u{1F96D}", "\u8292\u679C mango \u6C34\u679C", "food"],
    ["\u{1F95D}", "\u7315\u7334\u6843 kiwi \u6C34\u679C", "food"],
    ["\u{1F345}", "\u756A\u8304 tomato \u852C\u83DC", "food"],
    ["\u{1F966}", "\u897F\u5170\u82B1 broccoli \u852C\u83DC", "food"],
    ["\u{1F344}", "\u8611\u83C7 mushroom", "food"],
    ["\u{1F35E}", "\u9762\u5305 bread", "food"],
    ["\u{1F950}", "\u725B\u89D2\u5305 croissant", "food"],
    ["\u{1F9C0}", "\u5976\u916A cheese", "food"],
    ["\u{1F95A}", "\u86CB egg", "food"],
    ["\u{1F953}", "\u57F9\u6839 bacon", "food"],
    ["\u{1F354}", "\u6C49\u5821 hamburger", "food"],
    ["\u{1F35F}", "\u85AF\u6761 fries", "food"],
    ["\u{1F32D}", "\u70ED\u72D7 hotdog", "food"],
    ["\u{1F32E}", "\u5854\u53EF taco", "food"],
    ["\u{1F35C}", "\u9762\u6761 ramen noodle", "food"],
    ["\u{1F35A}", "\u7C73\u996D rice", "food"],
    ["\u{1F363}", "\u5BFF\u53F8 sushi", "food"],
    ["\u{1F95F}", "\u997A\u5B50 dumpling", "food"],
    ["\u{1F36A}", "\u997C\u5E72 cookie", "food"],
    ["\u{1F9C1}", "\u7EB8\u676F\u86CB\u7CD5 cupcake", "food"],
    ["\u{1F36B}", "\u5DE7\u514B\u529B chocolate", "food"],
    ["\u{1F36F}", "\u8702\u871C honey", "food"],
    ["\u{1F95B}", "\u725B\u5976 milk", "food"],
    ["\u{1F37A}", "\u5564\u9152 beer", "food"],
    ["\u{1F377}", "\u7EA2\u9152 wine", "food"],
    ["\u{1F379}", "\u9E21\u5C3E\u9152 cocktail", "food"],
    ["\u26BD", "\u8DB3\u7403 soccer \u8FD0\u52A8", "activity"],
    ["\u{1F3C0}", "\u7BEE\u7403 basketball \u8FD0\u52A8", "activity"],
    ["\u{1F3C8}", "\u6A44\u6984\u7403 football \u8FD0\u52A8", "activity"],
    ["\u26BE", "\u68D2\u7403 baseball \u8FD0\u52A8", "activity"],
    ["\u{1F3BE}", "\u7F51\u7403 tennis \u8FD0\u52A8", "activity"],
    ["\u{1F3D0}", "\u6392\u7403 volleyball \u8FD0\u52A8", "activity"],
    ["\u{1F3D3}", "\u4E52\u4E53 pingpong \u8FD0\u52A8", "activity"],
    ["\u{1F3F8}", "\u7FBD\u6BDB\u7403 badminton \u8FD0\u52A8", "activity"],
    ["\u{1F94A}", "\u62F3\u51FB box \u8FD0\u52A8", "activity"],
    ["\u{1F3CA}", "\u6E38\u6CF3 swim \u8FD0\u52A8", "activity"],
    ["\u{1F6B4}", "\u9A91\u884C bike \u8FD0\u52A8", "activity"],
    ["\u{1F9D8}", "\u51A5\u60F3 yoga \u653E\u677E", "activity"],
    ["\u{1F6F9}", "\u6ED1\u677F skate \u8FD0\u52A8", "activity"],
    ["\u26F7\uFE0F", "\u6ED1\u96EA ski \u51AC\u5929", "activity"],
    ["\u{1F3B8}", "\u5409\u4ED6 guitar \u97F3\u4E50", "activity"],
    ["\u{1F3B9}", "\u94A2\u7434 piano \u97F3\u4E50", "activity"],
    ["\u{1F3BA}", "\u5C0F\u53F7 trumpet \u97F3\u4E50", "activity"],
    ["\u{1F941}", "\u9F13 drum \u97F3\u4E50", "activity"],
    ["\u{1F3A4}", "\u9EA6\u514B\u98CE mic \u5531\u6B4C \u6F14\u8BB2", "activity"],
    ["\u{1F3AA}", "\u9A6C\u620F circus \u6D3B\u52A8", "activity"],
    ["\u{1F697}", "\u6C7D\u8F66 car \u8F66", "other"],
    ["\u{1F695}", "\u51FA\u79DF\u8F66 taxi \u6253\u8F66", "other"],
    ["\u{1F68C}", "\u516C\u4EA4 bus \u5927\u5DF4", "other"],
    ["\u{1F684}", "\u9AD8\u94C1 train \u706B\u8F66 \u5FEB", "other"],
    ["\u2708\uFE0F", "\u98DE\u673A plane \u822A\u73ED \u51FA\u884C", "other"],
    ["\u{1F6A2}", "\u8239 ship \u8D27\u8FD0", "other"],
    ["\u2693", "\u951A anchor \u7A33\u5B9A", "other"],
    ["\u{1F3E2}", "\u5199\u5B57\u697C office \u516C\u53F8", "other"],
    ["\u{1F3ED}", "\u5DE5\u5382 factory \u751F\u4EA7", "other"],
    ["\u{1F3D7}\uFE0F", "\u5DE5\u5730 construction \u65BD\u5DE5", "other"],
    ["\u{1F5A8}\uFE0F", "\u6253\u5370\u673A printer \u8F93\u51FA", "dev"],
    ["\u{1F5B2}\uFE0F", "\u8DDF\u8E2A\u7403 trackball \u8F93\u5165", "dev"],
    ["\u{1F50E}", "\u653E\u5927\u955C search \u67E5\u627E", "dev"],
    ["\u{1F4F6}", "\u4FE1\u53F7 signal \u7F51\u7EDC", "dev"],
    ["\u{1F4F2}", "\u4E0B\u8F7D download \u5B89\u88C5 install", "dev"],
    ["\u{1F39B}\uFE0F", "\u65CB\u94AE control \u8C03\u8282", "dev"],
    ["\u{1F600}", "\u7B11 \u5F00\u5FC3 grin \u9AD8\u5174 smile"],
    ["\u{1F604}", "\u7B11 \u5927\u7B11 \u5F00\u5FC3 smile happy"],
    ["\u{1F602}", "\u7B11 \u7B11\u54ED \u7B11\u6B7B laugh joy"],
    ["\u{1F923}", "\u7B11 \u7206\u7B11 rofl laughing"],
    ["\u{1F60A}", "\u5FAE\u7B11 \u5F00\u5FC3 \u6E29\u548C blush smile"],
    ["\u{1F642}", "\u5FAE\u7B11 slight smile \u5E73\u9759"],
    ["\u{1F609}", "\u7728\u773C wink \u8C03\u76AE"],
    ["\u{1F60E}", "\u9177 cool \u592A\u9633\u955C \u81EA\u4FE1"],
    ["\u{1F914}", "\u601D\u8003 think \u60F3\u4E00\u60F3 \u7422\u78E8"],
    ["\u{1F605}", "\u5C34\u5C2C \u7D27\u5F20 sweat \u6C57"],
    ["\u{1F62D}", "\u54ED \u5927\u54ED cry \u60B2\u4F24"],
    ["\u{1F622}", "\u54ED \u6D41\u6CEA sad \u96BE\u8FC7"],
    ["\u{1F621}", "\u751F\u6C14 \u6124\u6012 angry mad"],
    ["\u{1F634}", "\u7761 \u56F0 sleep \u4F11\u606F"],
    ["\u{1F92F}", "\u9707\u60CA \u7206\u70B8 mindblown \u60CA\u8BB6"],
    ["\u{1F973}", "\u5E86\u795D \u6D3E\u5BF9 party \u751F\u65E5"],
    ["\u{1F607}", "\u5929\u4F7F \u5584\u826F angel halo"],
    ["\u{1FAE1}", "\u656C\u793C salute \u6536\u5230 \u660E\u767D"],
    ["\u{1F91D}", "\u63E1\u624B \u5408\u4F5C handshake \u8FBE\u6210"],
    ["\u{1F64F}", "\u62DC\u6258 \u611F\u8C22 thanks please"],
    ["\u2600\uFE0F", "\u592A\u9633 \u6674\u5929 \u767D\u5929 sun \u5149\u7167"],
    ["\u{1F319}", "\u6708\u4EAE \u591C\u665A night \u591C\u95F4"],
    ["\u2B50", "\u661F \u6536\u85CF star \u8BC4\u5206 \u63A8\u8350"],
    ["\u{1F3B5}", "\u97F3\u4E50 \u97F3\u7B26 music \u58F0\u97F3"],
    ["\u{1F3C3}", "\u8DD1\u6B65 \u8FD0\u52A8 run \u5FEB\u901F"],
    ["\u{1F36D}", "\u7CD6 \u751C lollipop \u8DA3\u5473"],
    ["\u{1F9D1}\u200D\u{1F373}", "\u53A8\u5E08 \u70F9\u996A cook \u53A8\u623F"],
    ["\u{1F9D1}\u200D\u{1F3EB}", "\u8001\u5E08 \u6559\u5B66 teacher \u8BB2\u89E3"]
  ];
  var POPULARITY = [
    "\u{1F602}",
    "\u{1F923}",
    "\u{1F60A}",
    "\u{1F62D}",
    "\u{1F600}",
    "\u{1F604}",
    "\u{1F914}",
    "\u{1F60E}",
    "\u{1F44D}",
    "\u{1F64F}",
    "\u{1F605}",
    "\u{1F622}",
    "\u{1F621}",
    "\u{1F634}",
    "\u{1F92F}",
    "\u{1F973}",
    "\u{1F607}",
    "\u{1FAE1}",
    "\u{1F91D}",
    "\u{1F389}",
    "\u{1F525}",
    "\u2705",
    "\u274C",
    "\u26A0\uFE0F",
    "\u{1F680}",
    "\u2699\uFE0F",
    "\u{1F4A1}",
    "\u{1F50D}",
    "\u{1F512}",
    "\u{1F4CC}",
    "\u{1F4C8}",
    "\u{1F4C9}",
    "\u{1F4B0}",
    "\u{1F3A8}",
    "\u{1F4DA}",
    "\u{1F4DD}",
    "\u{1F4E6}",
    "\u{1F9E9}",
    "\u{1F9E0}",
    "\u{1F916}",
    "\u{1F30D}",
    "\u2600\uFE0F",
    "\u{1F319}",
    "\u2B50",
    "\u{1F3B5}",
    "\u{1F433}",
    "\u{1F4BB}",
    "\u{1F4F1}",
    "\u2615",
    "\u{1F3AF}"
  ];
  var CATEGORY_RULES = [
    ["smileys", ["\u7B11", "\u5F00\u5FC3", "\u54ED", "\u751F\u6C14", "\u601D\u8003", "\u7761", "\u9707\u60CA", "\u5E86\u795D", "\u5929\u4F7F", "\u656C\u793C", "\u63E1\u624B", "\u62DC\u6258", "\u5C34\u5C2C", "\u7728\u773C", "\u9177", "\u5FAE\u7B11", "smile", "laugh", "cry", "angry", "think", "sleep", "cool", "wink", "party", "salute", "thanks", "handshake", "grin", "joy", "rofl", "blush"]],
    ["nature", ["\u592A\u9633", "\u6708\u4EAE", "\u661F", "\u5730\u7403", "\u6CE2\u6D6A", "\u5C71", "\u5F69\u8679", "\u690D\u7269", "\u5B87\u5B99", "\u592A\u7A7A", "\u9CB8\u9C7C", "\u7AE0\u9C7C", "\u8783\u87F9", "\u5154\u5B50", "\u72D0\u72F8", "\u871C\u8702", "\u732B\u5934\u9E70", "\u718A\u732B", "\u72EC\u89D2\u517D", "\u4E4C\u9F9F", "\u9F99\u5377\u98CE", "\u4E91", "\u5E7C\u82D7", "\u5E78\u8FD0", "sun", "moon", "star", "earth", "wave", "mountain", "rainbow", "plant", "space", "whale", "octopus", "crab", "rabbit", "fox", "bee", "owl", "panda", "unicorn", "turtle", "tornado", "cloud", "seedling"]],
    ["dev", ["\u5F00\u53D1", "\u90E8\u7F72", "\u670D\u52A1\u5668", "\u6570\u636E\u5E93", "\u6D4B\u8BD5", "\u6784\u5EFA", "\u63D2\u4EF6", "\u63A5\u53E3", "\u7EBF\u7A0B", "\u94A9\u5B50", "\u5BB9\u5668", "\u8BED\u8A00", "\u7B97\u6CD5", "\u6587\u6863", "\u7EC8\u7AEF", "\u4EE3\u7801", "\u952E\u76D8", "\u8FDB\u7A0B", "\u4ED3\u5E93", "dev", "code", "server", "database", "db", "test", "build", "plugin", "api", "thread", "hook", "container", "rust", "docker", "github", "algorithm", "docs", "keyboard", "process", "release", "refactor", "debug"]]
  ];
  var CATEGORY_ORDER = ["popular", "smileys", "nature", "food", "activity", "dev", "other"];
  var POPULAR_LIMIT = 24;
  var POPULAR_RANK = new Map(POPULARITY.map((char, index) => [char, index]));
  var EMOJI_CATALOG = ENTRIES.map(([char, keywords, category], index) => {
    const words = keywords.toLowerCase().split(/\s+/).filter(Boolean);
    return {
      char,
      keywords: words,
      category: category ?? categoryOf(words),
      rank: POPULAR_RANK.get(char) ?? 1e3 + index
    };
  });
  function categoryOf(words) {
    for (const [category, markers] of CATEGORY_RULES) {
      if (markers.some((marker) => words.includes(marker))) return category;
    }
    return "other";
  }
  function groupEmoji(characters) {
    const byChar = new Map(EMOJI_CATALOG.map((entry) => [entry.char, entry]));
    const buckets = /* @__PURE__ */ new Map();
    for (const char of characters) {
      const entry = byChar.get(char);
      if (entry === void 0) continue;
      const key = entry.category;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(entry);
    }
    const popular = [...characters].map((char) => byChar.get(char)).filter((entry) => entry !== void 0 && POPULAR_RANK.has(entry.char)).sort((left, right) => left.rank - right.rank).slice(0, POPULAR_LIMIT);
    const groups = [];
    if (popular.length > 0) groups.push({ key: "popular", characters: popular.map((entry) => entry.char) });
    for (const key of CATEGORY_ORDER) {
      if (key === "popular") continue;
      const entries = buckets.get(key);
      if (entries === void 0 || entries.length === 0) continue;
      groups.push({
        key,
        characters: entries.sort((left, right) => left.rank - right.rank).map((entry) => entry.char)
      });
    }
    return groups;
  }
  function searchEmoji(query) {
    const keyword = String(query ?? "").trim().toLowerCase();
    if (keyword === "") return EMOJI_CATALOG.map((entry) => entry.char);
    const words = keyword.split(/\s+/).filter(Boolean);
    const scored = [];
    for (const entry of EMOJI_CATALOG) {
      let total = 0;
      let matched = true;
      for (const word of words) {
        const score = scoreEntry(entry, word);
        if (score === 0) {
          matched = false;
          break;
        }
        total += score;
      }
      if (matched) scored.push({ char: entry.char, score: total });
    }
    const rank = new Map(EMOJI_CATALOG.map((entry) => [entry.char, entry.rank]));
    scored.sort((left, right) => right.score - left.score || (rank.get(left.char) ?? 0) - (rank.get(right.char) ?? 0));
    return scored.map((item) => item.char);
  }
  function scoreEntry(entry, word) {
    if (entry.char === word) return 100;
    if (entry.keywords.includes(word)) return 30;
    if (entry.keywords.some((keyword) => keyword.startsWith(word))) return 20;
    if (entry.keywords.some((keyword) => keyword.includes(word))) return 10;
    if (entry.char.includes(word)) return 5;
    return 0;
  }

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
      const [emojiQuery, setEmojiQuery] = React.useState("");
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
      const updateEmojiQuery = (value) => {
        setEmojiQuery(value);
        if (normalizeIconSpec({ kind: "emoji", value }) !== null) setEmoji(value.trim());
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
            mode === "emoji" ? h(EmojiBody, { emoji, query: emojiQuery, onQueryChange: updateEmojiQuery, onPick: setEmoji, t, h }) : mode === "iconfont" ? h(IconfontBody, { query, updateQuery, search, appliedId, runSearch, chooseResult, t, h }) : mode === "image" ? h(ImageBody, { image, fileInput, pickFile, applyFile, t, h }) : h(TextBody, { text, color, setText, setColor, setMode, t, h })
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
    function EmojiBody({ emoji, query, onQueryChange, onPick, t, h: h2 }) {
      const matches2 = searchEmoji(query);
      const searching = query.trim() !== "";
      const groups = searching ? [{ key: "matches", characters: matches2 }] : groupEmoji(matches2);
      const renderGrid = (characters) => h2("div", { className: "dsh-project-icon-grid", role: "group" }, characters.map((choice) => h2("button", {
        key: choice,
        type: "button",
        className: "dsh-project-icon-emoji",
        "aria-label": choice,
        "aria-pressed": emoji === choice,
        onClick: () => onPick(choice)
      }, choice)));
      return h2(
        "div",
        { className: "dsh-project-icon-emoji-body" },
        h2("input", {
          type: "search",
          className: "dsh-project-icon-input",
          value: query,
          maxLength: MAX_EMOJI_CODE_UNITS,
          placeholder: t("emoji.placeholder"),
          "aria-label": t("emoji.placeholder"),
          onChange: (event) => onQueryChange(event.target.value),
          onKeyDown: (event) => {
            if (event.key !== "Enter" || matches2.length !== 1) return;
            event.preventDefault();
            onPick(matches2[0]);
          }
        }),
        searching && matches2.length > 0 ? h2("div", { className: "dsh-project-icon-hint" }, t("emoji.count", { n: matches2.length })) : null,
        matches2.length === 0 ? h2("div", { className: "dsh-project-icon-hint" }, t("emoji.empty")) : h2(
          "div",
          { className: "dsh-project-icon-emoji-scroll" },
          groups.map((group) => h2(
            "div",
            { key: group.key, className: "dsh-project-icon-emoji-group" },
            h2("div", { className: "dsh-project-icon-hint" }, t(`emoji.group.${group.key}`)),
            renderGrid(group.characters)
          ))
        )
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
.dsh-project-icon-grid{display:grid;grid-template-columns:repeat(9,1fr);gap:4px;padding:2px 2px 2px 2px}
.dsh-project-icon-emoji-scroll{display:flex;flex-direction:column;gap:6px;max-height:186px;overflow:auto;padding-inline-end:4px}
.dsh-project-icon-emoji-group{display:flex;flex-direction:column;gap:2px}
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
