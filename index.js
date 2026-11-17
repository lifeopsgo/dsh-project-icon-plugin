import { ICONFONT_PATH, ICONS_PATH } from './src/endpoint.js'
import { createIconfontSearch } from './src/iconfont.js'
import { createIconfontHandler, createIconsHandler } from './src/routes.js'
import { readIconsDocument, upsertIcon } from './src/store.js'

export const inject = ['webServer', 'connection']

export function apply(ctx, config = {}) {
  const filePath = config.iconsFile ?? resolveIconsPath(ctx)
  const handler = createIconsHandler({
    readIcons: () => readIconsDocument(filePath),
    saveIcon: (workspaceId, spec) => upsertIcon(filePath, workspaceId, spec),
    rejectRequest: (request) => ctx.connection.requestRejection(request),
    logError: (error) => console.warn('project-icon:', error?.name ?? 'request-failed'),
  })
  ctx.effect(
    () => ctx.webServer.register({ kind: 'exact', path: ICONS_PATH, handler }),
    `project icon: ${ICONS_PATH}`,
  )

  const iconfontHandler = createIconfontHandler({
    search: createIconfontSearch(),
    rejectRequest: (request) => ctx.connection.requestRejection(request),
    logError: (error) => console.warn('project-icon: iconfont', error?.code ?? 'failed'),
  })
  ctx.effect(
    () => ctx.webServer.register({ kind: 'exact', path: ICONFONT_PATH, handler: iconfontHandler }),
    `project icon: ${ICONFONT_PATH}`,
  )
}

function resolveIconsPath(ctx) {
  const homePath = ctx.get('dshHomePath')
  if (typeof homePath !== 'function') throw new Error('project-icon: host does not provide dshHomePath')
  return homePath('project-icons', 'icons.json')
}
