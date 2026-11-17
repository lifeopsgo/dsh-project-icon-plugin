import { DICTIONARIES } from './locales.js'
import { createIconController } from './controller.js'
import { createIconStore } from './store.js'
import { createOverlay } from './overlay.js'

const NS = 'projectIcon'
const MENU_ACTION_ID = 'projectIcon.edit'
const MENU_ICON_KEY = 'projectIcon.edit'

window.__ModuleLoader__.load({
  id: '@local/dsh-project-icon',
  factory(require) {
    const React = require('react')
    const primitives = require('@deepseek-ai/dsh-client-ui-primitives')
    const h = React.createElement
    const ProjectIconOverlay = createOverlay(React, primitives)

    function ProjectIconGlyph() {
      return h('svg', {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
        'aria-hidden': true,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.2,
        strokeLinejoin: 'round',
      },
      h('rect', { x: 2.4, y: 3, width: 11.2, height: 10, rx: 2.2 }),
      h('circle', { cx: 6.1, cy: 6.5, r: 1.1, fill: 'currentColor', stroke: 'none' }),
      h('path', { d: 'M3.3 11.6 6.5 8.6l2.1 2 1.5-1.3 2.6 2.5' }))
    }

    return {
      inject: ['slots', 'locale', 'contextMenus'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, DICTIONARIES), 'project icon: locale')
        const store = createIconStore()

        ctx.slots.inject('contextMenu.icon', () => ctx.slots.register(
          { name: 'contextMenu.icon', key: MENU_ICON_KEY },
          ProjectIconGlyph,
        ))

        ctx.effect(() => ctx.contextMenus.register({
          id: MENU_ACTION_ID,
          target: 'workspace',
          order: 200,
          resolve: ({ workspaceId, displayTitle }) => [{
            id: 'edit',
            label: ctx.locale.bind(NS)('menu.item'),
            icon: { key: MENU_ICON_KEY },
            run: () => store.set({ editor: { workspaceId, label: displayTitle }, error: null }),
          }],
        }), 'project icon: workspace menu action')

        ctx.slots.inject('shell.overlay', () => ctx.slots.register(
          { name: 'shell.overlay', id: 'project-icon', order: 60, locale: NS },
          () => h(ProjectIconOverlay, { store, locale: ctx.locale, namespace: NS }),
        ))
      },
    }
  },
})
