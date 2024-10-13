/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SColumnImport } from './routes/s.$column'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SColumnRoute = SColumnImport.update({
  path: '/s/$column',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/s/$column': {
      id: '/s/$column'
      path: '/s/$column'
      fullPath: '/s/$column'
      preLoaderRoute: typeof SColumnImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/s/$column': typeof SColumnRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/s/$column': typeof SColumnRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/s/$column': typeof SColumnRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/s/$column'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/s/$column'
  id: '__root__' | '/' | '/s/$column'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SColumnRoute: typeof SColumnRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SColumnRoute: SColumnRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/s/$column"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/s/$column": {
      "filePath": "s.$column.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
