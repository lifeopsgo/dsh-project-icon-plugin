export function createIconStore() {
  let state = { phase: 'loading', icons: {}, editor: null, saving: false, error: null }
  const listeners = new Set()
  return {
    getSnapshot: () => state,
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    set: (patch) => {
      state = { ...state, ...patch }
      for (const listener of listeners) listener()
    },
  }
}
