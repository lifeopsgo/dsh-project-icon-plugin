(() => {
  // src/client/locales.js
  var DICTIONARIES = {
    zh: {
      "menu.item": "\u4FEE\u6539\u9879\u76EE\u56FE\u6807",
      "dialog.title": "\u4FEE\u6539\u9879\u76EE\u56FE\u6807",
      "tabs.emoji": "\u8868\u60C5",
      "tabs.image": "\u56FE\u7247",
      "tabs.text": "\u6587\u5B57",
      "emoji.placeholder": "\u6216\u76F4\u63A5\u8F93\u5165\u4E00\u4E2A\u8868\u60C5",
      "upload.pick": "\u9009\u62E9\u56FE\u7247",
      "upload.hint": "PNG\u3001JPEG\u3001WebP\uFF0C\u81EA\u52A8\u7F29\u5230 64 \u50CF\u7D20",
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
      "error.fileTooLarge": "\u56FE\u7247\u539F\u59CB\u6587\u4EF6\u592A\u5927\uFF0C\u6362\u4E00\u5F20\u5C0F\u4E8E 8 MB \u7684",
      "error.tooManyPixels": "\u56FE\u7247\u50CF\u7D20\u592A\u5927\uFF0C\u5148\u88C1\u526A\u4E00\u4E0B",
      "error.encodedTooLarge": "\u538B\u7F29\u540E\u4ECD\u8D85\u8FC7\u5355\u5F20\u56FE\u6807\u4E0A\u9650\uFF0C\u6362\u4E00\u5F20\u66F4\u7B80\u5355\u7684\u56FE",
      "error.unsupportedImage": "\u8FD9\u4E2A\u6587\u4EF6\u8BFB\u4E0D\u51FA\u6765\uFF0C\u6362\u4E00\u5F20 PNG\u3001JPEG \u6216 WebP"
    },
    en: {
      "menu.item": "Change project icon",
      "dialog.title": "Change project icon",
      "tabs.emoji": "Emoji",
      "tabs.image": "Image",
      "tabs.text": "Text",
      "emoji.placeholder": "Or type one emoji",
      "upload.pick": "Choose image",
      "upload.hint": "PNG, JPEG, or WebP; scaled to 64 px",
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
      "error.fileTooLarge": "That file is too large; use one under 8 MB",
      "error.tooManyPixels": "That image has too many pixels; crop it first",
      "error.encodedTooLarge": "Still over the per-icon limit after scaling; use a simpler image",
      "error.unsupportedImage": "That file cannot be read; use PNG, JPEG, or WebP"
    }
  };

  // src/endpoint.js
  var ICONS_PATH = "/project-icon/icons";
  var ICONS_ROUTE = `${ICONS_PATH.slice(1)}`;

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

  // src/client/image.js
  var WEBP_QUALITY = 0.9;
  var MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
  var MAX_SOURCE_PIXELS = 4096 * 4096;
  var ImageInputError = class extends Error {
    constructor(reason) {
      super(reason);
      this.name = "ImageInputError";
      this.reason = reason;
    }
  };
  async function readIconImageDataUrl(file) {
    if (!(file instanceof Blob) || !file.type.startsWith("image/")) throw new ImageInputError("unsupported-type");
    if (file.size > MAX_UPLOAD_BYTES) throw new ImageInputError("file-too-large");
    const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" }).catch(() => {
      throw new ImageInputError("unsupported-type");
    });
    try {
      if (bitmap.width * bitmap.height > MAX_SOURCE_PIXELS) throw new ImageInputError("too-many-pixels");
      const box = containBox(bitmap.width, bitmap.height, ICON_CANVAS_SIZE);
      if (box === null) throw new ImageInputError("empty-image");
      const canvas = document.createElement("canvas");
      canvas.width = ICON_CANVAS_SIZE;
      canvas.height = ICON_CANVAS_SIZE;
      const context = canvas.getContext("2d");
      if (context === null) throw new ImageInputError("canvas-unavailable");
      context.clearRect(0, 0, ICON_CANVAS_SIZE, ICON_CANVAS_SIZE);
      context.drawImage(bitmap, box.x, box.y, box.width, box.height);
      const encoded = canvas.toDataURL("image/webp", WEBP_QUALITY);
      const dataUrl = encoded.startsWith("data:image/webp") ? encoded : canvas.toDataURL("image/png");
      if (dataUrl.length > MAX_IMAGE_DATA_URL_LENGTH) throw new ImageInputError("encoded-too-large");
      return dataUrl;
    } finally {
      bitmap.close();
    }
  }

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
    "empty-image": "error.unsupportedImage",
    "unsupported-type": "error.unsupportedImage"
  };
  function draftFromState(mode, state) {
    const placement = state.replaceIcon ? "replace" : "prefix";
    if (mode === "emoji") return normalizeIconSpec({ kind: "emoji", value: state.emoji, placement });
    if (mode === "text") return normalizeIconSpec({ kind: "text", value: state.text, color: state.color, placement });
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
      const [replaceIcon, setReplaceIcon] = React.useState(existing?.placement !== "prefix");
      const [imageError, setImageError] = React.useState(null);
      const fileInput = React.useRef(null);
      const state = { emoji, text, color, image, replaceIcon };
      const draft = draftFromState(mode, state);
      const message = imageError ?? (error === null ? null : t(ERROR_CODES[error] ?? "error.save"));
      const submit = () => {
        if (draft === null || saving) return;
        onSave(draft);
      };
      const pickFile = async (event) => {
        const file = event.target.files?.[0];
        event.target.value = "";
        if (file === void 0) return;
        setImageError(null);
        try {
          setImage(await readIconImageDataUrl(file));
          setMode("image");
        } catch (failure) {
          setImageError(t(IMAGE_ERRORS[failure?.reason] ?? "error.unsupportedImage"));
        }
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
        existing === void 0 ? null : h(Button, { variant: "outline", disabled: saving, onClick: () => onSave(null) }, t("actions.reset")),
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
          footer
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
              onClick: () => setMode("emoji")
            }, t("tabs.emoji")),
            h("button", {
              type: "button",
              role: "tab",
              className: "dsh-project-icon-tab",
              "aria-selected": mode === "image",
              onClick: () => setMode("image")
            }, t("tabs.image")),
            h("button", {
              type: "button",
              role: "tab",
              className: "dsh-project-icon-tab",
              "aria-selected": mode === "text",
              onClick: () => setMode("text")
            }, t("tabs.text"))
          ),
          mode === "emoji" ? h(EmojiBody, { emoji, setEmoji, setMode, t, h }) : mode === "image" ? h(ImageBody, { image, fileInput, pickFile, t, h }) : h(TextBody, { text, color, setText, setColor, setMode, t, h }),
          h(
            "div",
            { className: "dsh-project-icon-preview" },
            h("span", { className: "dsh-project-icon-preview-cell" }, draft === null ? null : preview(draft, h)),
            h("span", null, draft === null ? t("preview.empty") : t("preview.label"))
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
    function ImageBody({ image, fileInput, pickFile, t, h: h2 }) {
      return h2(
        "div",
        { className: "dsh-project-icon-image-body" },
        h2(
          "div",
          { className: "dsh-project-icon-image-actions" },
          h2(
            Button,
            { variant: "outline", onClick: () => fileInput.current?.click() },
            image === "" ? t("upload.pick") : t("upload.replace")
          ),
          h2("input", {
            ref: fileInput,
            type: "file",
            accept: "image/png,image/jpeg,image/webp",
            hidden: true,
            onChange: pickFile
          })
        ),
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
.dsh-project-icon-body{display:flex;flex-direction:column;gap:12px;min-width:360px}
.dsh-project-icon-tabs{display:inline-flex;gap:4px;padding:3px;border-radius:8px;background:var(--dsw-alias-bg-layer-2)}
.dsh-project-icon-tab{flex:1;padding:5px 10px;border:0;border-radius:6px;background:none;color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;line-height:18px;cursor:pointer}
.dsh-project-icon-tab[aria-selected="true"]{background:var(--dsw-alias-bg-overlay,var(--dsw-alias-bg-layer-1));color:var(--dsw-alias-label-primary);font-weight:600}
.dsh-project-icon-grid{display:grid;grid-template-columns:repeat(9,1fr);gap:4px;max-height:168px;overflow:auto;padding:2px}
.dsh-project-icon-emoji{display:flex;align-items:center;justify-content:center;height:30px;border:1px solid transparent;border-radius:6px;background:none;font-size:17px;line-height:1;cursor:pointer}
.dsh-project-icon-emoji:hover{background:var(--dsw-alias-interactive-bg-hover,var(--dsw-alias-bg-layer-2))}
.dsh-project-icon-emoji[aria-pressed="true"]{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-2)}
.dsh-project-icon-emoji-body,.dsh-project-icon-text-body{display:flex;flex-direction:column;gap:8px}
.dsh-project-icon-image-body{display:flex;flex-direction:column;gap:8px}
.dsh-project-icon-image-actions{display:flex;align-items:center;gap:10px}
.dsh-project-icon-input{box-sizing:border-box;width:100%;height:32px;padding:0 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:14px}
.dsh-project-icon-input:focus{outline:none;border-color:var(--dsw-alias-brand-primary)}
.dsh-project-icon-field{display:flex;align-items:center;gap:8px}
.dsh-project-icon-swatches{display:flex;flex-wrap:wrap;gap:6px}
.dsh-project-icon-swatch{width:20px;height:20px;padding:0;border:1px solid var(--dsw-alias-border-l1);border-radius:50%;cursor:pointer}
.dsh-project-icon-swatch[aria-pressed="true"]{box-shadow:0 0 0 2px var(--dsw-alias-brand-primary)}
.dsh-project-icon-color{width:32px;height:32px;padding:0;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;background:none;flex:none}
.dsh-project-icon-preview{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px dashed var(--dsw-alias-border-l1);border-radius:8px;color:var(--dsw-alias-label-secondary);font-size:12px}
.dsh-project-icon-preview-cell{display:inline-flex;flex:none;align-items:center;justify-content:center;width:16px;height:20px}
.dsh-project-icon-preview-glyph{font-size:14px;line-height:1}
.dsh-project-icon-preview-image{width:16px;height:16px;object-fit:contain}
.dsh-project-icon-hint{color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}
.dsh-project-icon-footer{display:flex;align-items:center;gap:8px;width:100%}
.dsh-project-icon-toggle{display:inline-flex;align-items:center;gap:8px;color:var(--dsw-alias-label-secondary);font-size:13px;white-space:nowrap;cursor:pointer}
.dsh-project-icon-spacer{flex:1}
.dsh-project-icon-error{color:var(--dsw-alias-state-error-primary);font-size:12px;line-height:18px}
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
