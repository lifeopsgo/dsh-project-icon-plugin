import { buildIconAnimationStyles, buildIconStyles } from '../icon-css.js'
import { createIconController } from './controller.js'
import { createIconDialog } from './dialog.js'
import { STYLES } from './styles.js'

export function createOverlay(React, primitives) {
  const h = React.createElement
  const IconDialog = createIconDialog(React, primitives)

  return function ProjectIconOverlay({ store, locale, namespace }) {
    const state = React.useSyncExternalStore(store.subscribe, store.getSnapshot)
    const controller = React.useMemo(() => createIconController(store), [store])

    React.useEffect(() => {
      controller.load()
      const onFocus = () => {
        if (!store.getSnapshot().saving) controller.load()
      }
      window.addEventListener('focus', onFocus)
      return () => {
        window.removeEventListener('focus', onFocus)
        controller.dispose()
      }
    }, [controller, store])

    const css = React.useMemo(
      () => `${buildIconAnimationStyles()}\n${STYLES}\n${buildIconStyles(state.icons)}`,
      [state.icons],
    )

    return h(React.Fragment, null,
      h('style', { 'data-project-icon-styles': '', dangerouslySetInnerHTML: { __html: css } }),
      state.editor === null ? null : h(IconDialog, {
        key: state.editor.workspaceId,
        editor: state.editor,
        icons: state.icons,
        saving: state.saving,
        error: state.error,
        onClose: controller.closeEditor,
        onSave: (spec) => controller.save(state.editor.workspaceId, spec),
        t: locale.bind(namespace),
      }))
  }
}
