import { fetchIcons, saveIcon } from './api.js'

export function createIconController(store, api = { fetchIcons, saveIcon }) {
  let sequence = 0
  let disposed = false

  const apply = (step, patch) => {
    if (disposed || step !== sequence) return false
    store.set(patch)
    return true
  }

  return {
    load: async () => {
      const step = ++sequence
      try {
        const icons = await api.fetchIcons()
        apply(step, { phase: 'ready', icons, error: null })
      } catch (error) {
        apply(step, { phase: 'failed', error: error?.code ?? 'request-failed' })
      }
    },
    save: async (workspaceId, spec) => {
      const step = ++sequence
      store.set({ saving: true, error: null })
      try {
        const icons = await api.saveIcon(workspaceId, spec)
        apply(step, { phase: 'ready', icons, editor: null, saving: false, error: null })
      } catch (error) {
        apply(step, { saving: false, error: error?.code ?? 'request-failed' })
      }
    },
    closeEditor: () => store.set({ editor: null, error: null }),
    dispose: () => {
      disposed = true
    },
  }
}
