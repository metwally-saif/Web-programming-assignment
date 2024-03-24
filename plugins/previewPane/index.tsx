// This plugin is responsible for adding a “Preview” tab to the document pane
// in the Studio. This tab will show a preview of the document in the front-end

import { DRAFT_MODE_ROUTE } from 'lib/sanity.api'
import type { DefaultDocumentNodeResolver } from 'sanity/structure'
import { Iframe, IframeOptions } from 'sanity-plugin-iframe-pane'
import authorType from 'schemas/author'
import postType from 'schemas/post'

import AuthorAvatarPreviewPane from './AuthorAvatarPreviewPane'

const iframeOptions = {
  url: {
    origin: 'same-origin',
    preview: (document) => {
      if (!document) {
        return new Error('Missing document')
      }
      switch (document._type) {
        case 'post':
          return (document as any)?.slug?.current
            ? `/posts/${(document as any).slug.current}`
            : new Error('Missing slug')
        default:
          return new Error(`Unknown document type: ${document?._type}`)
      }
    },
    draftMode: DRAFT_MODE_ROUTE,
  },
  reload: { button: true },
} satisfies IframeOptions

export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    switch (schemaType) {
      case authorType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({ document }) => (
              <AuthorAvatarPreviewPane
                name={document.displayed.name as any}
                picture={document.displayed.picture as any}
              />
            ))
            .title('Preview'),
        ])

      case postType.name:
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      default:
        return null
    }
  }
}
