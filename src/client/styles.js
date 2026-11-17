export const STYLES = `
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
`
