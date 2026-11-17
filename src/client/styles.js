export const STYLES = `
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
`
